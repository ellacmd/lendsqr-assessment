import type { UserProfile } from '@/types/user.types';

const API_URL = 'https://api.npoint.io/4bd9188d63a90399d13e';

export type ApiUser = {
    id: string;
    email: string;
    status: string;
    socials: {
        twitter: string;
        facebook: string;
        instagram: string;
    };
    username: string;
    guarantor: {
        email: string;
        fullName: string;
        phoneNumber: string;
        relationship: string;
    };
    dateJoined: string;
    phoneNumber: string;
    organization: string;
    personalInformation: {
        bvn: string;
        email: string;
        gender: string;
        children: string;
        fullName: string;
        phoneNumber: string;
        maritalStatus: string;
        typeOfResidence: string;
    };
    educationAndEmployment: {
        officeEmail: string;
        loanRepayment: string;
        monthlyIncome: string[];
        employmentStatus: string;
        levelOfEducation: string;
        sectorOfEmployment: string;
        durationOfEmployment: string;
    };
};

const mapApiUserToUserProfile = (
    apiUser: ApiUser
): UserProfile & { dateJoinedISO?: string } => {
    return {
        id: apiUser.id,
        organization: apiUser.organization,
        username: apiUser.username,
        email: apiUser.email,
        phoneNumber: apiUser.phoneNumber,
        dateJoined: new Date(apiUser.dateJoined).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        dateJoinedISO: apiUser.dateJoined, 
        status: apiUser.status as UserProfile['status'],
        personalInformation: {
            fullName: apiUser.personalInformation.fullName,
            phoneNumber: apiUser.personalInformation.phoneNumber,
            email: apiUser.personalInformation.email,
            bvn: apiUser.personalInformation.bvn,
            gender: apiUser.personalInformation.gender,
            maritalStatus: apiUser.personalInformation.maritalStatus,
            children: apiUser.personalInformation.children,
            typeOfResidence: apiUser.personalInformation.typeOfResidence,
        },
        educationAndEmployment: {
            levelOfEducation: apiUser.educationAndEmployment.levelOfEducation,
            employmentStatus: apiUser.educationAndEmployment.employmentStatus,
            sectorOfEmployment:
                apiUser.educationAndEmployment.sectorOfEmployment,
            durationOfEmployment:
                apiUser.educationAndEmployment.durationOfEmployment,
            officeEmail: apiUser.educationAndEmployment.officeEmail,
            monthlyIncome: apiUser.educationAndEmployment.monthlyIncome,
            loanRepayment: apiUser.educationAndEmployment.loanRepayment,
        },
        socials: {
            twitter: apiUser.socials.twitter,
            facebook: apiUser.socials.facebook,
            instagram: apiUser.socials.instagram,
        },
        guarantor: {
            fullName: apiUser.guarantor.fullName,
            phoneNumber: apiUser.guarantor.phoneNumber,
            email: apiUser.guarantor.email,
            relationship: apiUser.guarantor.relationship,
        },
    };
};

export const fetchUsers = async (): Promise<UserProfile[]> => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const data: ApiUser[] = await response.json();
        return data.map(mapApiUserToUserProfile);
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};
