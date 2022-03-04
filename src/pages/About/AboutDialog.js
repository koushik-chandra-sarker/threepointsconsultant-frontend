import React from 'react';
import _ from "lodash";
import gmail_icon from "../../assets/icon/gmail_icon.png"

const AboutDialog = ({team}) => {
    return (
        <div
            className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg text-center text-gray-500">
            <div
                className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-56 w-56">
                {
                    !_.isEmpty(team.profilePicSmall) ?
                        <img
                            src={team.profilePicSmall}
                            alt="image"
                            className="h-full w-full"/>
                        :
                        <div
                            className={'h-full w-full w-fulltext-xs flex justify-center items-center bg-gray-300'}>
                            <span>No Picture</span>
                        </div>
                }


            </div>

            <h2 className="mt-4 mb-0 font-bold text-xl">{team.name}</h2>
            <h6 className="mt-2 mb-0 text-sm font-medium">
                {team.designation}
            </h6>
            <h6 className={'mt-2 text-sm font-extrabold mb-0'}>
                {team.degree}
            </h6>

            <div className="text-center text-xs pt-0 mt-4"
                 dangerouslySetInnerHTML={{__html: team.description}}/>


            <ul className="flex flex-row mt-4 space-x-2 list-none">
                {
                    team.facebookLink &&
                    <li>
                        <a href={team.facebookLink} target="_blank"
                           rel={"noopener noreferrer"}
                           className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                            <i className="fab fa-facebook text-blue-700"/>
                        </a>
                    </li>
                }
                {
                    team.linkedinLink &&
                    <li>
                        <a href={team.linkedinLink} target="_blank"
                           rel={"noopener noreferrer"}
                           className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                            <i className="fab fa-linkedin text-blue-600"/>
                        </a>
                    </li>
                }

                {
                    team.emailAddress &&
                    <li>
                        <a href={`mailto:${team.emailAddress}`}
                           target="_blank" rel={"noopener noreferrer"}
                           className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                            <div className={"w-4"}>
                                <img src={gmail_icon} alt=""/>
                            </div>
                        </a>
                    </li>
                }

            </ul>
        </div>
    );
};

export default AboutDialog;