import { getImageUrl } from "../util/util";

export default function Avatar({ person, size = 100 }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}