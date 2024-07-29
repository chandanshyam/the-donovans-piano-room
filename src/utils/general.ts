import AccountAndSettingsNav from "@/components/atoms/AccountAndSettingsNav"

export const aboutNavigationPages = {
    whyChooseUs: "why-choose-us",
    whoWeServe: "who-we-serve",
    membership: "membership",
    scholarship: "scholarship",
    FAQs: "faqs" 
}

export const navigationPages = {
    home: "home",
    about: "about",
    games: "games",
    bookstore: "bookstore",
    contact: "contact",
    cart:"cart"
}

export const aboutScholarshipNavigation = {
    whatsIncluded: "what's included",
    whosEligible: "who's eligible"
}

export const settingsNavigation = {
    profile: "Profile",
    membership: "Membership",
    paymentMethods: "PaymentMethods",
    notification: "Notification",
    timeSpent: "TimeSpent"
}


export const testPassword = (password: string) =>{
    const lowerCase = /[a-z]/.test(password)
    const upperCase = /[A-Z]/.test(password)
    const numberCase = /[0-9]/.test(password)
    const symbolCase = /[!@#$%^&*()\[_\]+={}.'"~²`%¨)°:,?§/-]/.test(password)
    return {correctLength: password.length >= 12, lowerCase, upperCase, numberCase, symbolCase}
}

/*************/
/***Profile***/
/*************/

export const profile = { // to be removed after BE Integration
    fullName: "Jack Stuart",
    imageSrc: "/ToBeRemoved/avatar/1.svg",
    pronouns: "He/Him/His",
    email: "jacks@email.com",
    birthDate: "2000-12-24",
    phoneNumber: "1-234-567-8910"
}

export const pronouns = [
    "She/Her/Hers",
    "He/Him/His",
    "They/Them/Theirs"
]

export const authorizedWrapperTitles = {
    AccountAndSettings: "Account & Settings",
    Dashboard: "Dashboard"
}


/*******************/
/***Notifications***/
/*******************/

export function beenTimeAgo(date: Date): {timeAgo: string, underADay: boolean} {
    const then = date.getTime();
    const now = new Date().getTime();
    const seconds = Math.floor((now - then) / 1000);
  
    const units: [string, number][] = [
      ['year', 31536000],
      ['month', 2592000],
      ['day', 86400],
      ['hour', 3600],
      ['minute', 60],
      ['second', 1],
    ];
  
    for (const [unit, value] of units) {
      if (seconds >= value) {
        const interval = Math.floor(seconds / value);
        const suffix = interval === 1 ? '' : 's';
        return {timeAgo: `${interval} ${unit}${suffix} ago`, underADay: value <= 3600 ? true : false};
      }
    }
    return {timeAgo: 'just now', underADay: true};
  }

export const dummyNoticationsData = [
    {
        title: "9.0.1 new version launched",
        description: "Version 9.0.1 has launched, featuring enhanced stability, improved features, and critical bug fixes. Upgrade now for a smoother, more efficient user experience.",
        actionTitle: "Update",
        date: new Date('07-05-2024-12:10'),
        unread: true,
        imageSrc: "/ToBeRemoved/notification-icons/upgrade.svg"
    },
    {
        title: "Renew your annual program",
        description: "Renew your annual program today to continue enjoying all the benefits and features. Don't miss out on the latest updates and exclusive member services for another year!",
        actionTitle: "Renew",
        date: new Date('07-05-2024-10:00'),
        unread: false,
        imageSrc: "/ToBeRemoved/notification-icons/program.svg"
    },
    {
        title: "Upload your profile photo",
        description: "Upload your profile photo to personalize your account and enhance your visibility. A current photo helps others recognize and connect with you more effectively!",
        actionTitle: "Go to account",
        date: new Date('07-03-2024-10:00'),
        unread: true,
        imageSrc: "/ToBeRemoved/notification-icons/profile.svg"
    }
]

export const books = [
    {
        id: 0,
        title: "Book I",
        color: "#F6AD69",
        imageSrc: "/bookstore/book-list/soft-cover-1.svg",
        coverImageSrc: "/bookstore/books/book-1.svg",
        titleColor: "#B55119",
        type: "Soft cover",
        price: "15.00",
        description: "This exciting new learning method will teach you the fundamentals of music theory...",

    },
    {
        id: 1,
        title: "Book II",
        color: "#F8D867",
        imageSrc: "/bookstore/book-list/soft-cover-2.svg",
        coverImageSrc: "/bookstore/books/book-2.svg",
        titleColor: "#BC8212",
        type: "Soft cover",
        price: "15.00",
        page:"cart",
        description: "This book covers chords, inversions, and complex rhythms. Students will also learn...",

    },
    {
        id: 2,
        title: "Book III",
        color: "#75C973",
        imageSrc: "/bookstore/book-list/soft-cover-3.svg",
        coverImageSrc: "/bookstore/books/book-3.svg",
        titleColor: "#438342",
        type: "Soft cover",
        price: "25.00",
        page:"cart",
        description: "Compound and simple time signatures, The Circle of Fifths, 7 chords, melodic and...",

    },
    {
        id: 3,
        title: "Book I",
        color: "#F6AD69",
        imageSrc: "/bookstore/book-list/e-book-1.svg",
        coverImageSrc: "/bookstore/books/book-1.svg",
        titleColor: "#B55119",
        type: "E-book",
        price: "15.00",
        description: "A fun interactive e-book that teaches basic music theory using games, quizzes and ...",

    },
    {
        id: 4,
        title: "Book II",
        color: "#F8D867",
        imageSrc: "/bookstore/book-list/e-book-2.svg",
        coverImageSrc: "/bookstore/books/book-2.svg",
        titleColor: "#BC8212",
        type: "E-book",
        price: "15.00",
        description: "This interactive e-book focuses on teaching students chords, inversions, complex rhythm...",

    },
    {
        id: 5,
        title: "Book III",
        color: "#75C973",
        imageSrc: "/bookstore/book-list/e-book-3.svg",
        coverImageSrc: "/bookstore/books/book-3.svg",
        titleColor: "#438342",
        type: "E-book",
        price: "25.00",
        description: "This digital e-book helps students advance in their musical learning as they study...",

    },
    {
        id: 6,
        title: "Book I",
        color: "#F6AD69",
        imageSrc: "/bookstore/book-list/audio-1.svg",
        coverImageSrc: "/bookstore/books/book-1.svg",
        titleColor: "#B55119",
        type: "Audio book",
        price: "15.00",
        description: "This ONE-HOUR audio book will teach you the fundamentals of piano in a fun, easily...",

    },
    {
        id: 7,
        title: "Book II",
        color: "#F8D867",
        imageSrc: "/bookstore/book-list/audio-2.svg",
        coverImageSrc: "/bookstore/books/book-2.svg",
        titleColor: "#BC8212",
        type: "Audio book",
        price: "15.00",
        description: "This ONE-HOUR audio book will teach you the fundamentals of piano in a fun, easily...",

    },
    {
        id: 8,
        title: "Book III",
        color: "#75C973",
        imageSrc: "/bookstore/book-list/audio-3.svg",
        coverImageSrc: "/bookstore/books/book-3.svg",
        titleColor: "#438342",
        type: "Audio book",
        price: "25.00",
        description: "This ONE-HOUR audio book will teach you the fundamentals of piano in a fun, easily...",

    },
]
