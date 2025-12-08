import filterIcon from '@/assets/filter.svg';
import moreIcon from '@/assets/three-dots.svg';
import type { UserProfile } from '@/types/user.types';
import UserStatusBadge from './UserStatusBadge';
import './UserTable.scss';

type UserTableProps = {
    users: UserProfile[];
};

type Column = {
    key: string;
    label: string;
    filterable?: boolean;
};

const columns: Column[] = [
    { key: 'organization', label: 'Organization', filterable: true },
    { key: 'username', label: 'Username', filterable: true },
    { key: 'email', label: 'Email', filterable: true },
    { key: 'phoneNumber', label: 'Phone number', filterable: true },
    { key: 'dateJoined', label: 'Date joined', filterable: true },
    { key: 'status', label: 'Status', filterable: true },
    { key: 'actions', label: '' },
];

const UserTable = ({ users }: UserTableProps) => {
    return (
        <div className='user-table'>
            <div className='user-table__scroll'>
                <table>
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th key={column.key}>
                                    <div className='user-table__head-cell'>
                                        <span>{column.label}</span>
                                        {column.filterable ? (
                                            <button
                                                type='button'
                                                className='user-table__column-filter'
                                                aria-label={`Filter by ${column.label}`}>
                                                <img src={filterIcon} alt='' />
                                            </button>
                                        ) : null}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.organization}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.dateJoined}</td>
                                <td>
                                    <UserStatusBadge status={user.status} />
                                </td>
                                <td className='user-table__actions'>
                                    <button
                                        type='button'
                                        className='user-table__more'
                                        aria-label='Actions'>
                                        <img src={moreIcon} alt='' />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;
