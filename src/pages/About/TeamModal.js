import React from 'react';

const TeamModal = ({children, content}) => {
    return (
        <div>
            <div className="team-modal full-height">
                <input className="modal-btn" type="checkbox" id="modal-btn" name="modal-btn"/>
                <label htmlFor="modal-btn">
                    {/*<i className="fa-solid fa-xmark text-red-900"/>*/}
                    {children}
                </label>
                <div className="modal">
                    <div className="modal-wrap">
                        {content}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TeamModal;