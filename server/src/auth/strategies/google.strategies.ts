import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import { MailService } from "src/mail/mail.service";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(private prisma: PrismaService, private jwtService: JwtService, private mailService: MailService) {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
            callbackURL: process.env.GOOGLE_CALLBACK_URL || "http://localhost:3000/auth/google/callback",
            scope: ['email', 'profile'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: any) {
        console.log('Google validate ishladi');
        console.log('Profile:', profile);

        const email = profile.emails?.[0]?.value;

        let user = await this.prisma.user.findUnique({ where: { email } });

        const token = this.jwtService.sign({ email }, { expiresIn: '15m' });
        const link = `${process.env.FRONTEND_URL}/auth/verify-token?token=${token}`;


        if (!user) {
            console.log('🆕 User yaratilyapti...');
            user = await this.prisma.user.create({
                data: {
                    email,
                    name: profile.name?.givenName || "NoName",
                    surname: profile.name?.familyName || "NoSurname",
                    profile_pic: profile.photos?.[0]?.value || "https://via.placeholder.com/150",
                    google_id: profile.id,
                },
            });
            this.mailService.sendVerificationLink(email, link)
        } else {
            this.mailService.sendVerificationLink(email, link)
        }

        console.log('User tayyor:', user);
        done(null, user);
    }


}
