import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import profile_icon from './profile_icon.png';
import user_icon_me from './user-icon-me.png';
import logo_r from './logo_r.png';
import logo_d_r from './logo_d_r.png';

import db from './db.png'
import draw from './draw.png'
import docker from './docker.png'
import eclips from './eclips.png'
import pgadmin4 from './pgadmin4.png'
import workbench from './workbench.png'
import spring from './spring.png'
import shyam_logo from './shyam_logo.png'
import f from './f.png'
import fd from './fd.png'
import mern from './mern.png'

import events from './events.png'
import experince from './experince.png'
import background from './background.png'

import photoshop from './photoshop.png'
import lightroom from './lightroom.png'
import aftereffects from './aftereffects.png'
import canva from './canva.png'
import captureone from './captureone.jpg'
import dji from './dji.png'
import google_drive from './google_drive.png'
import dropbox from './dropbox.png'
import weading from './weading.jpg'
import fest from './fest.png'
import whatsapp from './whatsapp.png'
import calling from './calling.png'
import address from './address.png'
import background_g from './background_g.jpg'
import wedding from './wedding.png'
import tilak from './tilak.png'
import engagement from './engagement.png'
import corparate from './engagement.png'
import birthday from './corparate.png'
import anu from './anu.png'
import prewedding from './prewedding.png'
import video from './video.png'

export const assets = {
    weading,
    background_g,
    birthday,
    tilak,

    user_image,
    shyam_logo,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    logo_r,
    logo_d_r,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    user_icon_me,
    profile_icon,
    db,
    draw,
    docker,
    eclips,
    pgadmin4,
    workbench,
    spring,
    f, fd, mern,
    events, experince, background,
    wedding,
    photoshop,
    lightroom,
    aftereffects,
    canva,
    captureone,
    dji,
    google_drive,
    dropbox,
    whatsapp,
    calling,
    address,
    birthday,
    anu,
    prewedding,
    video,
    engagement,
    corparate,
    fest
};

export const workData = [
    {
        title: 'Wedding Moments',
        description: 'Traditional & Candid Photography',
        bgImage: '/wedding.jpg',
        link: 'https://yourwebsite.com/wedding-gallery'
    },
    {
        title: 'Tilak Ceremony',
        description: 'Pre-Wedding Ritual Photography',
        bgImage: '/tilak.jpg',
        link: 'https://yourwebsite.com/tilak-gallery'
    },
    {
        title: 'Birthday Celebrations',
        description: 'Capturing Joy & Fun',
        bgImage: '/birthday.jpg',
        link: 'https://yourwebsite.com/birthday-gallery'
    },
    {
        title: 'Anniversary Shoots',
        description: 'Couple Portraits & Event Coverage',
        bgImage: '/anniversary.jpg',
        link: 'https://yourwebsite.com/anniversary-gallery'
    }
];


export const serviceData = [
    {
        title: "Wedding Video & Photography",
        description: "Candid & traditional coverage of wedding events with cinematic videography.",
        link: "/services/wedding",
        icon: assets.wedding
    },
    {
        title: "Tilak & Rituals",
        description: "Beautifully frame the emotions of tilak and pre-wedding rituals in Indian traditions.",
        link: "/services/tilak",
        icon: assets.tilak
    },
    {
        title: "Engagement Ceremony Shoots",
        description: "Celebrate the beginning of your forever with beautifully crafted engagement photography and videography. We capture every emotional moment, from the ring exchange to family celebrations.",
        link: "/services/engagement",
        icon: assets.engagement // <-- Add this image to /public/services/
    },

    {
        title: "Birthday Celebrations Shorts",
        description: "Capture joyful moments of birthday parties for kids, teens, and adults.",
        link: "/services/birthday",
        icon: assets.birthday
    },
    {
        title: "Anniversary Events",
        description: "Relive the journey of love with memorable anniversary shoots and party coverage.",
        link: "/services/anniversary",
        icon: assets.anu
    },
    {
        title: "Pre-Wedding Shoots",
        description: "Creative pre-wedding photography to tell your story before the big day.",
        link: "/services/prewedding",
        icon: assets.prewedding
    },
    {
        title: "HD Video Coverage",
        description: "Professional video recording & editing for all events with cinematic flair.",
        link: "/services/video",
        icon: assets.video
    },
    {
        title: "Corporate Event Coverage",
        description: "Capture the essence of your business events with sharp, professional photography and videography. From seminars and product launches to annual functions — we cover it all with precision and style.",
        link: "/services/corporate-events",
        icon: assets.corparate // <-- Add this image
    },
    {
        title: "Cultural & Religious Functions",
        description: "Immortalize the beauty and tradition of your cultural and religious gatherings with rich visuals. We specialize in covering havans, pujas, community festivals, and local traditions across India.",
        link: "/services/cultural-events",
        icon: assets.fest // <-- Add this image
    }

]





export const infoList = [
    {
        icon: assets.experince,
        iconDark: assets.experince,
        title: 'Experience',
        description: 'Over 10 years capturing weddings, birthdays, tilak ceremonies, anniversaries, and more across India.'
    },
    {
        icon: assets.background,
        iconDark: assets.background,
        title: 'Background',
        description: 'Trained professional photographer with deep understanding of lighting, composition, and editing.'
    },
    {
        icon: assets.events,
        iconDark: assets.events,
        title: 'Events Covered',
        description: 'Covered more than 500+ events including destination weddings and cultural festivals.'
    }
];


export const toolsData = [
    assets.photoshop,       // Adobe Photoshop for photo editing
    assets.lightroom,       // Adobe Lightroom for color grading
    assets.aftereffects,    // Adobe After Effects for video transitions
    assets.canva,           // Canva for quick designs/posters
    assets.captureone,      // Capture One for raw editing
    assets.dji,             // DJI for drone photography
    assets.google_drive,    // For sharing client albums
    assets.dropbox          // Backup and client delivery
];
