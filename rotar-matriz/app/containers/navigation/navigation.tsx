import Link from 'next/link'
import React from 'react'
import styles from './navigation.module.css'
import { Button } from '@/app/components/button/button'
import Image from 'next/image'
import { Label } from '@/app/components'

interface INavigationProps {

}

const links = [
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'Rotar Matriz',
        route: '/rotarmatriz'
    }
]

export const Navigation: React.FC<INavigationProps> = () => {
    return (
        <header className={styles.header}>
            <span className={styles.logo}>DELOSI</span>
            <nav className={styles.nav}>
                <ul className={styles.navigation}>
                    {
                        links.map(({ label, route }) => (
                            <li key={route} className={styles.navigationitem}>
                                <Link href={route}> {label} </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}