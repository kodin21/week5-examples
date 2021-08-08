import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';


const questions = {
    1: 'Soru 1',
    2: 'Soru 2'
};
const FAQ = () => {

    const { faqID } = useParams();
    const question = questions[faqID];

    const history = useHistory();
    

    useEffect(() => {

        // API'a git idsi 2 olani getir.

    }, [faqID]);
    return     (
    <div>
        SIKCA SORULANLAR
        {!faqID && Object.values(questions).map((q) => <div>{q}</div>)}
        {question}
        <button
        type="button"
        onClick={() => history.push('/login')}>
            LOGINE GIT
        </button>
    </div>)
}

export default FAQ;