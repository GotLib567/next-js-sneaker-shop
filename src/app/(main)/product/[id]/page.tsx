import Image from 'next/image';


interface Sneaker {
    id: string;
    name: string;
    brand: string;
    price: number;
    image: string;
    description: string;
    sizes: number[];
    colors: string[];
    rating: number;
    inStock: boolean;
}

const mockSneaker: Sneaker = {
    id: '1',
    name: 'Air Max Pro',
    brand: 'Nike',
    price: 129.99,
    image: '/images/sneaker-1.jpg',
    description: 'Premium athletic sneaker with advanced cushioning technology for all-day comfort.',
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    colors: ['Black', 'White', 'Blue', 'Red'],
    rating: 4.8,
    inStock: true,
};

export default function ProductPage({ id }: { id: string }) {
    return (
        <div>
            <Image src={mockSneaker.image} alt={mockSneaker.name} width={400} height={400} />
        </div>
    );
}