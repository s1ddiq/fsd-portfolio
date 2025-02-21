export const sidebarLinks = [
    {
        title: 'bio',
        icon: '/icons/red-folder.svg',
        url: '/bio',
    },
    {
        title: 'interests',
        icon: '/icons/green-folder.svg',
        url: '/interests'
    },
    {
        title: 'projects',
        icon: '/icons/purple-folder.svg',
        url: '/projects'
    },
    {
        title: 'contact',
        icon: '/icons/mail.svg',
        url: '/contact'
    },
]


{/* TODO: add links to each social.*/}
export const socialLinks = [
    {
        name: 'github',
        icon: '/icons/github.svg',
    },
    {
        name: 'twitter',
        icon: '/icons/twitter.svg',
    },
    {
        name: 'discord',
        icon: '/icons/discord.svg',
    }
]

export const projects = [
    {
        name: 'Neura Calling',
        description: 'Neura is a calling app using the latest technologies, you can schedule, start and join meetings.',
        website: 'https://yoom-kappa-one.vercel.app/sign-up',
        technologies: ['next.js', 'getstream.io', 'tailwindcss', 'typescript', 'clerk', 'shadcn'],
        repo: 'https://github.com/s1ddiq/yoom',
        icons: ['/icons/nextjs.svg', '/icons/typescript.svg', '/images/clerk.png']
    },
    {
        name: 'StashIt Storage',
        description: 'StashIt is your one stop solution for storing items, store any file with any extension inside your personal drive.',
        technologies: ['next.js', 'appwrite', 'tailwindcss', 'typescript', 'shadcn'],
        website: 'https://stash-it-alpha.vercel.app/sign-up',
        repo: 'https://github.com/s1ddiq/StashIt',
        icons: ['/icons/nextjs.svg', '/icons/tailwindcss.svg', '/icons/typescript.svg'],
        cover: '/images/yoomshowcase.png'
    }
]