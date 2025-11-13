// /config/reviews.ts

export type Review = {
    name: string;
    role: string;
    image: string;
    rating: number;
    feedback: string;
};

export const reviewsConfig = {
    sectionTitle: "What Our Users Say",
    sectionSubtitle: "Real feedback from our amazing community.",
    reviews: [
        {
            name: "Alice Johnson",
            role: "Product Manager",
            image: "/assets/images/reviews/alice.jpg",
            rating: 5,
            feedback:
                "Conversa Verlix completely transformed how our team collaborates. The AI assistance feels so natural!",
        },
        {
            name: "Michael Smith",
            role: "Software Engineer",
            image: "/assets/images/reviews/michael.jpg",
            rating: 5,
            feedback:
                "Superb performance and seamless integration! I use it daily for productivity and brainstorming.",
        },
        {
            name: "Sarah Lee",
            role: "Marketing Specialist",
            image: "/assets/images/reviews/sarah.jpg",
            rating: 4,
            feedback:
                "I love how intuitive and fast Conversa Verlix is — truly an AI companion that saves me hours every week.",
        },
    ],
};
