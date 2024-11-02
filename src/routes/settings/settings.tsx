import React, { useState } from 'react';
import './settings.css'; // Import the CSS file for styling
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastComponent from "../../components/CustomToast.tsx"; // Assuming you have a custom toast component

function SettingsMenu() {
    const [directory, setDirectory] = useState(''); // State for the text box

    const handleDirectoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDirectory(event.target.value);
    };

    const handleSubmit = () => {
        toast.success('Directory set to: ' + directory);
    };

    return (
        <div className="SettingsMenu">
            <h1>Settings</h1>
            <div className="SettingOption">
                <label htmlFor="directory">Program Install Location:</label>
                <input
                    type="text"
                    id="directory"
                    value={directory}
                    onChange={handleDirectoryChange}
                    placeholder="C:\Program Files (x86)\Ultreon\Applications"
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <ToastComponent />
        </div>
    );
}

export default SettingsMenu;