import { toast } from 'react-hot-toast';

export default function Debug() {
    const clearLocalStorage = () => {
        localStorage.clear();
        toast.success('LocalStorage cleared');
    };

    return (
        <div>
            <button className='btn btn-primary' onClick={clearLocalStorage}>
                Clear LocalStorage
            </button>
        </div>
    );
}
