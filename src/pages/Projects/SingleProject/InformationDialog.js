import React from 'react';

const InformationDialog = ({info}) => {
    return (
        <div className={"text-gray-600 text-xs sm:base leading-8"}>
                {/*make a borderless table with 2 columns*/}
            <div dangerouslySetInnerHTML={{__html:info}}/>
                {/*<table  className={"w-full leading-8"}>
                    <tbody>
                    <tr>
                        <td className={"w-1/5"}>
                            <p className={"text-gray-600"}>
                                Status: 11/2020
                            </p>
                        </td>
                        <td className={"w-1/5"}>
                            <p className={"text-gray-600"}>
                                    11/2020
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td className={"w-1/5"}>
                            <p className={"text-gray-600"}>
                                    Program:
                            </p>
                        </td>
                        <td className={"w-1/2"}>
                            <p className={"text-gray-600"}>
                                office
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td className={"w-1/5"}>
                            <p className={"text-gray-600"}>
                                    Location:
                            </p>
                        </td>
                        <td className={"w-1/5"}>
                            <p className={"text-gray-600"}>
                                    Ho Chi Minh city, Vietnam
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td className={"w-1/5"}>
                            <p className={"text-gray-600"}>
                                    Site are:
                            </p>
                        </td>
                        <td className={"w-1/5"}>
                            <p className={"text-gray-600"}>
                                    295m2
                            </p>
                        </td>
                    </tr>
                    <tr>
                            <td className={"sm:w-1/5 w-1/2"}>
                                    <p className={"text-gray-600"}>
                                            Principal Architect:
                                    </p>
                            </td>
                            <td className={"sm:w-1/5 w-1/2"}>
                                    <p className={"text-gray-600"}>
                                            Vo Trong Nghia, Tran Thi Hang
                                    </p>
                            </td>
                    </tr>
                    <tr>
                            <td className={"w-1/5"}>
                                    <p className={"text-gray-600"}>
                                            Design team:

                                    </p>
                            </td>
                            <td className={"w-1/5"}>
                                    <p className={"text-gray-600"}>
                                            Nobuhiro Inudoh, Tran Vo Kien, Kai Echigo
                                    </p>
                            </td>
                    </tr>
                    <tr>
                            <td className={"w-1/5"}>
                                    <p className={"text-gray-600"}>
                                            Client:
                                    </p>
                            </td>
                            <td className={"w-1/5"}>
                                    <p className={"text-gray-600"}>
                                            Fortune Electric Corporation
                                    </p>
                            </td>
                    </tr>
                    <tr>
                            <td className={"w-1/5"}>
                                    <p className={"text-gray-600"}>
                                            Photographers:
                                    </p>
                            </td>
                            <td className={"w-1/5"}>
                                    <p className={"text-gray-600"}>
                                            Hiroyuki Oki
                                    </p>
                            </td>
                    </tr>
                    </tbody>
                </table>
                <br/>

            <p className={"leading-7 text-justify"}>Located in an emerging quarter in Binh Thanh District, Nanoco Head Office expresses the strong identity of
                    Fortune Electric Corporation.

                    The building was formed by alternately stacking glass boxes, creating terraces through shifted edges of the
                    box to accommodate trees. This facade functions as a filter, optimizing the microclimate and light
                    conditions. During daytime, it diffuses direct sunlight, maintaining an ideal luminous environment for the
                    interior. On the contrary, at night, the exterior resembles a lantern with illuminating quality. The
                    thick-glazed glass blocks reduce thermal transmission, which reduce more energy consumption comparing to a
                    typical glazed facade. Taking into ac the high density surrounding in the near future, these glass function
                    as a blur and calm barrier to the outside, while the trees provide a tranquil ambiance.
                    The showroom occupies the first four stories, while offices are on the upper six. Instead of a generic
                    showroom, the client asked for a communal area to serve as a platform for creative community and activity.
                    Thus, spaces were designed on an open floor plan, featuring several unique architectural elements. The
                    entrance with a extensive opening reveals activities inside, attracting people passing by. Entering this
                    entrance reveals a multi-functional zone where various events and exhibitions could be held.. A large
                    vertical void connects all showrooms with curved staircases, creating a never-ending space.

                    Under the rapid-developing economy, Vietnamese cities suffer the lack of long-term vision and the persuade
                    of quality of life through urban interventions. However, the lack of controlled and sustainable planning
                    affects full economic potential and leaves a great impact on the environment. The aim of the project was to
                    improve its maintenance and quality of construction, aiming for durability that could last for hundreds of
                    years.

                    Greenery, one of the most significant features of VTN Architects’ design, is also a response to a wider
                    urban context. In the center of Ho Chi Minh City, the green coverage ratio is only 0.25%, which is
                    remarkably low in comparison to other Asian metropolitans. This lack of greenery is affecting people’s
                    everyday life with record-breaking high air temperature and pollution. Accordingly, not only does this
                    design provide a comfortable working environment but also encourages others to design towards a harmony
                    between human and nature. The building</p>*/}

        </div>
    );
};

export default InformationDialog;