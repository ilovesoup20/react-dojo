import Gallery, { Profile } from './components/Gallery.js';
import TodoList from './components/TodoList.js';
import Profile3 from './components/Card.js';

export default function App() {
    return (
        <div>
            <Gallery />
            <Profile />
            <TodoList />
            <Profile3 />
        </div>
    );
}