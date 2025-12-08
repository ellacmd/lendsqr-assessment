import { useMemo, useState, useEffect } from 'react';
import SummaryCard from '@/components/dashboard/SummaryCard';
import UserTable from '@/components/dashboard/UserTable';
import Pagination from '@/components/dashboard/Pagination';
import activeUsersIcon from '@/assets/active-users.svg';
import usersWithLoansIcon from '@/assets/users-with-loans.svg';
import usersWithSavingsIcon from '@/assets/users-with-savings.svg';
import numberOfUsersIcon from '@/assets/number-of-users.svg';
import type { UserProfile } from '@/types/user.types';
import './Dashboard.scss';

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const summaryCards = useMemo(
        () => [
            {
                icon: numberOfUsersIcon,
                title: 'Users',
                value: '2,453',
            },
            {
                icon: activeUsersIcon,
                title: 'Active Users',
                value: '2,453',
            },
            {
                icon: usersWithLoansIcon,
                title: 'Users With Loans',
                value: '12,453',
            },
            {
                icon: usersWithSavingsIcon,
                title: 'Users With Savings',
                value: '102,453',
            },
        ],
        []
    );

    const users = useMemo<UserProfile[]>(
        () => [
            {
                id: '1',
                organization: 'Lendsqr',
                username: 'Adedeji',
                email: 'adedeji@lendsqr.com',
                phoneNumber: '08012345678',
                dateJoined: 'May 15, 2020 10:00 AM',
                status: 'Active',
                personalInformation: {
                    fullName: 'Adedeji Ayo',
                    phoneNumber: '08012345678',
                    email: 'adedeji@lendsqr.com',
                    bvn: '12345678901',
                    gender: 'Male',
                    maritalStatus: 'Single',
                    children: 'None',
                    typeOfResidence: 'Apartment',
                },
                educationAndEmployment: {
                    levelOfEducation: 'B.Sc',
                    employmentStatus: 'Employed',
                    sectorOfEmployment: 'FinTech',
                    durationOfEmployment: '2 years',
                    officeEmail: 'adedeji@lendsqr.com',
                    monthlyIncome: ['₦200,000', '₦400,000'],
                    loanRepayment: '₦40,000',
                },
                socials: {
                    twitter: '@adedeji',
                    facebook: 'adedeji.ayo',
                    instagram: '@adedeji',
                },
                guarantor: {
                    fullName: 'Adeola Ayo',
                    phoneNumber: '08012345679',
                    email: 'adeola.ayo@example.com',
                    relationship: 'Sibling',
                },
            },
            {
                id: '2',
                organization: 'Irorun',
                username: 'Grace Edet',
                email: 'grace.edet@irorun.com',
                phoneNumber: '08098765432',
                dateJoined: 'Apr 12, 2020 09:15 AM',
                status: 'Pending',
                personalInformation: {
                    fullName: 'Grace Edet',
                    phoneNumber: '08098765432',
                    email: 'grace.edet@irorun.com',
                    bvn: '23456789012',
                    gender: 'Female',
                    maritalStatus: 'Married',
                    children: '2',
                    typeOfResidence: 'Duplex',
                },
                educationAndEmployment: {
                    levelOfEducation: 'M.Sc',
                    employmentStatus: 'Employed',
                    sectorOfEmployment: 'Banking',
                    durationOfEmployment: '5 years',
                    officeEmail: 'grace.edet@irorun.com',
                    monthlyIncome: ['₦300,000', '₦500,000'],
                    loanRepayment: '₦60,000',
                },
                socials: {
                    twitter: '@grace_edet',
                    facebook: 'grace.edet',
                    instagram: '@grace.edet',
                },
                guarantor: {
                    fullName: 'Samuel Edet',
                    phoneNumber: '08055555555',
                    email: 'samuel.edet@example.com',
                    relationship: 'Spouse',
                },
            },
            {
                id: '3',
                organization: 'Lendsqr',
                username: 'Debby Ogana',
                email: 'debby.ogana@lendsqr.com',
                phoneNumber: '08123456789',
                dateJoined: 'Mar 02, 2020 11:45 AM',
                status: 'Active',
                personalInformation: {
                    fullName: 'Debby Ogana',
                    phoneNumber: '08123456789',
                    email: 'debby.ogana@lendsqr.com',
                    bvn: '34567890123',
                    gender: 'Female',
                    maritalStatus: 'Single',
                    children: 'None',
                    typeOfResidence: 'Apartment',
                },
                educationAndEmployment: {
                    levelOfEducation: 'B.Sc',
                    employmentStatus: 'Employed',
                    sectorOfEmployment: 'FinTech',
                    durationOfEmployment: '3 years',
                    officeEmail: 'debby.ogana@lendsqr.com',
                    monthlyIncome: ['₦250,000', '₦420,000'],
                    loanRepayment: '₦45,000',
                },
                socials: {
                    twitter: '@debby_og',
                    facebook: 'debby.ogana',
                    instagram: '@debby.og',
                },
                guarantor: {
                    fullName: 'Bisi Ogana',
                    phoneNumber: '08198765432',
                    email: 'bisi.ogana@example.com',
                    relationship: 'Parent',
                },
            },
            {
                id: '4',
                organization: 'Lendsqr',
                username: 'Seyi Adeniyi',
                email: 'seyi.adeniyi@lendsqr.com',
                phoneNumber: '08044443333',
                dateJoined: 'Feb 24, 2020 02:30 PM',
                status: 'Inactive',
                personalInformation: {
                    fullName: 'Seyi Adeniyi',
                    phoneNumber: '08044443333',
                    email: 'seyi.adeniyi@lendsqr.com',
                    bvn: '45678901234',
                    gender: 'Male',
                    maritalStatus: 'Married',
                    children: '1',
                    typeOfResidence: 'Duplex',
                },
                educationAndEmployment: {
                    levelOfEducation: 'HND',
                    employmentStatus: 'Self-employed',
                    sectorOfEmployment: 'Retail',
                    durationOfEmployment: '4 years',
                    officeEmail: 'seyi.adeniyi@lendsqr.com',
                    monthlyIncome: ['₦180,000', '₦280,000'],
                    loanRepayment: '₦28,000',
                },
                socials: {
                    twitter: '@seyiadeniyi',
                    facebook: 'seyi.adeniyi',
                    instagram: '@seyiadeniyi',
                },
                guarantor: {
                    fullName: 'Tayo Adeniyi',
                    phoneNumber: '08120001111',
                    email: 'tayo.adeniyi@example.com',
                    relationship: 'Sibling',
                },
            },
            {
                id: '5',
                organization: 'Irorun',
                username: 'Kemi Adeoye',
                email: 'kemi.adeoye@irorun.com',
                phoneNumber: '08076543210',
                dateJoined: 'Jan 13, 2020 08:12 AM',
                status: 'Blacklisted',
                personalInformation: {
                    fullName: 'Kemi Adeoye',
                    phoneNumber: '08076543210',
                    email: 'kemi.adeoye@irorun.com',
                    bvn: '56789012345',
                    gender: 'Female',
                    maritalStatus: 'Single',
                    children: 'None',
                    typeOfResidence: 'Shared Apartment',
                },
                educationAndEmployment: {
                    levelOfEducation: 'B.A',
                    employmentStatus: 'Employed',
                    sectorOfEmployment: 'Media',
                    durationOfEmployment: '2 years',
                    officeEmail: 'kemi.adeoye@irorun.com',
                    monthlyIncome: ['₦150,000', '₦230,000'],
                    loanRepayment: '₦25,000',
                },
                socials: {
                    twitter: '@kemiadeoye',
                    facebook: 'kemi.adeoye',
                    instagram: '@kemi.adeoye',
                },
                guarantor: {
                    fullName: 'Funmi Adeoye',
                    phoneNumber: '08133334444',
                    email: 'funmi.adeoye@example.com',
                    relationship: 'Parent',
                },
            },
            {
                id: '6',
                organization: 'Paystack',
                username: 'Ifeanyi Obi',
                email: 'ifeanyi.obi@paystack.com',
                phoneNumber: '08120003000',
                dateJoined: 'Dec 02, 2019 10:30 AM',
                status: 'Active',
                personalInformation: {
                    fullName: 'Ifeanyi Obi',
                    phoneNumber: '08120003000',
                    email: 'ifeanyi.obi@paystack.com',
                    bvn: '67890123456',
                    gender: 'Male',
                    maritalStatus: 'Married',
                    children: '3',
                    typeOfResidence: 'Detached House',
                },
                educationAndEmployment: {
                    levelOfEducation: 'PhD',
                    employmentStatus: 'Employed',
                    sectorOfEmployment: 'Technology',
                    durationOfEmployment: '6 years',
                    officeEmail: 'ifeanyi.obi@paystack.com',
                    monthlyIncome: ['₦500,000', '₦700,000'],
                    loanRepayment: '₦80,000',
                },
                socials: {
                    twitter: '@ifeanyiobi',
                    facebook: 'ifeanyi.obi',
                    instagram: '@ifeanyiobi',
                },
                guarantor: {
                    fullName: 'Chidinma Obi',
                    phoneNumber: '08080008888',
                    email: 'chidinma.obi@example.com',
                    relationship: 'Spouse',
                },
            },
            {
                id: '7',
                organization: 'Lendsqr',
                username: 'Olamide George',
                email: 'olamide.george@lendsqr.com',
                phoneNumber: '07023001234',
                dateJoined: 'Nov 25, 2019 01:20 PM',
                status: 'Pending',
                personalInformation: {
                    fullName: 'Olamide George',
                    phoneNumber: '07023001234',
                    email: 'olamide.george@lendsqr.com',
                    bvn: '78901234567',
                    gender: 'Male',
                    maritalStatus: 'Single',
                    children: 'None',
                    typeOfResidence: 'Apartment',
                },
                educationAndEmployment: {
                    levelOfEducation: 'B.Eng',
                    employmentStatus: 'Employed',
                    sectorOfEmployment: 'Engineering',
                    durationOfEmployment: '1 year',
                    officeEmail: 'olamide.george@lendsqr.com',
                    monthlyIncome: ['₦220,000', '₦310,000'],
                    loanRepayment: '₦30,000',
                },
                socials: {
                    twitter: '@olamideg',
                    facebook: 'olamide.george',
                    instagram: '@olamide.g',
                },
                guarantor: {
                    fullName: 'Tayo George',
                    phoneNumber: '08140002222',
                    email: 'tayo.george@example.com',
                    relationship: 'Sibling',
                },
            },
            {
                id: '8',
                organization: 'Paystack',
                username: 'Ngozi Okafor',
                email: 'ngozi.okafor@paystack.com',
                phoneNumber: '08060001212',
                dateJoined: 'Oct 19, 2019 09:10 AM',
                status: 'Active',
                personalInformation: {
                    fullName: 'Ngozi Okafor',
                    phoneNumber: '08060001212',
                    email: 'ngozi.okafor@paystack.com',
                    bvn: '89012345678',
                    gender: 'Female',
                    maritalStatus: 'Married',
                    children: '1',
                    typeOfResidence: 'Apartment',
                },
                educationAndEmployment: {
                    levelOfEducation: 'MBA',
                    employmentStatus: 'Employed',
                    sectorOfEmployment: 'Technology',
                    durationOfEmployment: '4 years',
                    officeEmail: 'ngozi.okafor@paystack.com',
                    monthlyIncome: ['₦320,000', '₦480,000'],
                    loanRepayment: '₦50,000',
                },
                socials: {
                    twitter: '@ngozi_ok',
                    facebook: 'ngozi.okafor',
                    instagram: '@ngozi.okafor',
                },
                guarantor: {
                    fullName: 'Chinedu Okafor',
                    phoneNumber: '08066001212',
                    email: 'chinedu.okafor@example.com',
                    relationship: 'Spouse',
                },
            },
            {
                id: '9',
                organization: 'Irorun',
                username: 'Tosin Salami',
                email: 'tosin.salami@irorun.com',
                phoneNumber: '08190004567',
                dateJoined: 'Sep 08, 2019 03:45 PM',
                status: 'Inactive',
                personalInformation: {
                    fullName: 'Tosin Salami',
                    phoneNumber: '08190004567',
                    email: 'tosin.salami@irorun.com',
                    bvn: '90123456789',
                    gender: 'Female',
                    maritalStatus: 'Single',
                    children: 'None',
                    typeOfResidence: 'Shared Apartment',
                },
                educationAndEmployment: {
                    levelOfEducation: 'B.Sc',
                    employmentStatus: 'Self-employed',
                    sectorOfEmployment: 'Fashion',
                    durationOfEmployment: '3 years',
                    officeEmail: 'tosin.salami@irorun.com',
                    monthlyIncome: ['₦120,000', '₦200,000'],
                    loanRepayment: '₦18,000',
                },
                socials: {
                    twitter: '@tosinsalami',
                    facebook: 'tosin.salami',
                    instagram: '@tosin.salami',
                },
                guarantor: {
                    fullName: 'Femi Salami',
                    phoneNumber: '08170003333',
                    email: 'femi.salami@example.com',
                    relationship: 'Parent',
                },
            },
            {
                id: '10',
                organization: 'Lendsqr',
                username: 'Emeka Anyanwu',
                email: 'emeka.anyanwu@lendsqr.com',
                phoneNumber: '08010001111',
                dateJoined: 'Aug 28, 2019 12:05 PM',
                status: 'Pending',
                personalInformation: {
                    fullName: 'Emeka Anyanwu',
                    phoneNumber: '08010001111',
                    email: 'emeka.anyanwu@lendsqr.com',
                    bvn: '91234567890',
                    gender: 'Male',
                    maritalStatus: 'Married',
                    children: '2',
                    typeOfResidence: 'Duplex',
                },
                educationAndEmployment: {
                    levelOfEducation: 'M.Sc',
                    employmentStatus: 'Employed',
                    sectorOfEmployment: 'Finance',
                    durationOfEmployment: '7 years',
                    officeEmail: 'emeka.anyanwu@lendsqr.com',
                    monthlyIncome: ['₦400,000', '₦650,000'],
                    loanRepayment: '₦70,000',
                },
                socials: {
                    twitter: '@emekaany',
                    facebook: 'emeka.anyanwu',
                    instagram: '@emeka.any',
                },
                guarantor: {
                    fullName: 'Ada Anyanwu',
                    phoneNumber: '08020002222',
                    email: 'ada.anyanwu@example.com',
                    relationship: 'Spouse',
                },
            },
        ],
        []
    );

    const totalPages = Math.max(1, Math.ceil(users.length / itemsPerPage));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedUsers = useMemo(
        () => users.slice(startIndex, endIndex),
        [users, startIndex, endIndex]
    );

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [users.length, currentPage, totalPages, itemsPerPage]);

    return (
        <div className='dashboard'>
            <div className='dashboard__header'>
                <h1 className='dashboard__title'>Users</h1>
            </div>

            <section className='dashboard__summary'>
                {summaryCards.map((card) => (
                    <SummaryCard
                        key={card.title}
                        icon={card.icon}
                        title={card.title}
                        value={card.value}
                    />
                ))}
            </section>

            <section className='dashboard__table'>
                <UserTable users={paginatedUsers} />
            </section>

            <div className='dashboard__pagination'>
                <Pagination
                    totalItems={users.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    onItemsPerPageChange={setItemsPerPage}
                />
            </div>
        </div>
    );
};

export default Dashboard;
