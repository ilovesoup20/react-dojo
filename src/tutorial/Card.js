import Avatar from './Avatar';

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default function Profile3() {
    return (
        <Card>
            <Avatar size={100} person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }} />
        </Card>
    );
}