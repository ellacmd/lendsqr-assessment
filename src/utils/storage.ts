import type { UserProfile } from '@/types/user.types';

const DB_NAME = 'lendsqr_users';
const DB_VERSION = 1;
const STORE_NAME = 'users';

let db: IDBDatabase | null = null;

const initDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        if (db) {
            resolve(db);
            return;
        }

        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => {
            reject(request.error);
        };

        request.onsuccess = () => {
            db = request.result;
            resolve(db);
        };

        request.onupgradeneeded = (event) => {
            const database = (event.target as IDBOpenDBRequest).result;
            if (!database.objectStoreNames.contains(STORE_NAME)) {
                const objectStore = database.createObjectStore(STORE_NAME, {
                    keyPath: 'id',
                });
                objectStore.createIndex('email', 'email', { unique: false });
                objectStore.createIndex('username', 'username', {
                    unique: false,
                });
            }
        };
    });
};

export const saveUser = async (user: UserProfile): Promise<void> => {
    try {
        const database = await initDB();
        const transaction = database.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        await store.put(user);
    } catch (error) {
        console.error('Error saving user to IndexedDB:', error);
        try {
            localStorage.setItem(`user_${user.id}`, JSON.stringify(user));
        } catch (localError) {
            console.error('Error saving user to localStorage:', localError);
        }
    }
};

export const getUser = async (userId: string): Promise<UserProfile | null> => {
    try {
        const database = await initDB();
        const transaction = database.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(userId);

        return new Promise((resolve, reject) => {
            request.onsuccess = () => {
                resolve(request.result || null);
            };
            request.onerror = () => {
                reject(request.error);
            };
        });
    } catch (error) {
        console.error('Error getting user from IndexedDB:', error);
        try {
            const userData = localStorage.getItem(`user_${userId}`);
            return userData ? JSON.parse(userData) : null;
        } catch (localError) {
            console.error('Error getting user from localStorage:', localError);
            return null;
        }
    }
};

export const getAllUsers = async (): Promise<UserProfile[]> => {
    try {
        const database = await initDB();
        const transaction = database.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAll();

        return new Promise((resolve, reject) => {
            request.onsuccess = () => {
                resolve(request.result || []);
            };
            request.onerror = () => {
                reject(request.error);
            };
        });
    } catch (error) {
        console.error('Error getting users from IndexedDB:', error);
        try {
            const users: UserProfile[] = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith('user_')) {
                    const userData = localStorage.getItem(key);
                    if (userData) {
                        users.push(JSON.parse(userData));
                    }
                }
            }
            return users;
        } catch (localError) {
            console.error('Error getting users from localStorage:', localError);
            return [];
        }
    }
};

export const saveAllUsers = async (users: UserProfile[]): Promise<void> => {
    try {
        const database = await initDB();
        const transaction = database.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        await store.clear();

        for (const user of users) {
            await store.put(user);
        }
    } catch (error) {
        console.error('Error saving users to IndexedDB:', error);
        try {
            users.forEach((user) => {
                localStorage.setItem(`user_${user.id}`, JSON.stringify(user));
            });
        } catch (localError) {
            console.error('Error saving users to localStorage:', localError);
        }
    }
};
