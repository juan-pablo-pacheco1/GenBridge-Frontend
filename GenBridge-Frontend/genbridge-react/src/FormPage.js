import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FormPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { name, senior } = location.state;

    // State for form answers
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');

    const handleSubmit = () => {
        const interests = [answer1, answer2];
        // Check if the user is a senior
        if (senior) {
            // If senior, navigate to MatchPage with the collected data
            navigate('/match', { state: { name, senior, interests } });
        } else {
            // If not a senior (thus, a junior), navigate to EnterCalendlyLinkPage
            navigate('/enter-calendly', { state: { name, senior, interests } });
        }
    };

    return (
        <div>
            <h1>Some questions for you</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <div>
                    <label htmlFor="question1">What is your favorite color?</label>
                    <input
                        id="question1"
                        type="text"
                        value={answer1}
                        onChange={(e) => setAnswer1(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="question2">What is your hobby?</label>
                    <input
                        id="question2"
                        type="text"
                        value={answer2}
                        onChange={(e) => setAnswer2(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormPage;
