// /config/demo.ts

export const demoConfig = {
    title: "Experience Conversa Verlix in Action",
    subtitle:
        "Watch how Conversa Verlix transforms your workflow through powerful AI collaboration.",
    type: "mixed", // includes both video and images
    videoUrl: "https://www.youtube.com/embed/tBv2xWCS3wo?si=w7E26Gl2tLDLSQ1N",
    images: [
        {
            src: "/assets/images/demo/demo-1.jpg",
            alt: "Dashboard overview",
            caption: "Main dashboard with analytics",
        },
        {
            src: "/assets/images/demo/demo-2.jpg",
            alt: "Collaboration screen",
            caption: "Real-time team collaboration view",
        },
        {
            src: "/assets/images/demo/demo-3.jpg",
            alt: "Automation setup",
            caption: "Workflow automation interface",
        },
    ],
};

export type DemoConfig = typeof demoConfig;
