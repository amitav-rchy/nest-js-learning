/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Alice Johnson",
            "email": "alice.j@example.com",
            "role": "ADMIN"
        },
        {
            "id": 2,
            "name": "Bob Smith",
            "email": "bob.s@example.com",
            "role": "INTERN"
        },
        {
            "id": 3,
            "name": "Charlie Brown",
            "email": "charlie.b@example.com",
            "role": "ENGINEER"
        },
        {
            "id": 4,
            "name": "Diana Prince",
            "email": "diana.p@example.com",
            "role": "ENGINEER"
        },
        {
            "id": 5,
            "name": "Ethan Hunt",
            "email": "ethan.h@example.com",
            "role": "INTERN"
        }
    ]

    findAll(role?: "INTERN" | "ENGINEER" | "ADMIN") {
        if (role) {
            return this.users.filter((item) => item.role === role)
        }
        return this.users
    }
    findOne(id: number) {
        const user = this.users.find((item) => item.id === id)
        return user
    }
    create(user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        const newUser = {
            id: Math.floor(Math.random()),
            ...user
        }
        this.users.push(newUser)
        return newUser
    }
    update(id: number, updatedUser: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUser }
            }
            return user
        })
    }
    delete(id: number){
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return removedUser
    }
}
