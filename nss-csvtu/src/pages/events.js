import React from 'react'
import Feed from '../components/Feed';

const Regular = () => {
    return (
        <div className='pages-height'>
            <div className="flex flex-col text-lg  justify-center p-5 m-5 space-y-5">
                <div className="text-center m-3 text-4xl font-bold underline">
                    <p className="m-3 bg-blue-200"> Regular Events</p>
                </div>
                <p className="text-xl sm:text-lg m-5 font-bold" style={{"text-align": "justify"}}>
                    NSS activities have been divided in two major groups. These are regular NSS activities
                    and special camping programme –
                </p>

                <p className="m-5 font-bold">Regular NSS Activity: Under this, students undertake various programmes
                    in the adopted villages, college/school campuses and urban slums during week
                    ends or after college hours. NSS volunteers undertake various
                    activities in adopted villages and slums for community service. Duration of these
                    services is 120 hours. The NSS units organise the regular activities as detailed
                    below:
                </p>
                <ol className="m-5 space-y-3 "  >
                    <li>
                        (i) <p className="font-bold inline-block">Orientation of NSS volunteers:</p> To get the NSS volunteers acquainted with the
                        basics of NSS programmes, 20 hours are allocated for their orientation through
                        lectures, discussions, field visits and audio-visuals etc.
                    </li>
                    <li>
                        (ii) <p className="font-bold inline-block">Campus Work:</p> The NSS volunteers may be involved in the projects undertaken
                        for the benefit of the institution and students concerned. Such projects cover
                        development of play grounds, laying of gardens, tree plantation in the premises,
                        awareness programmes on drug-abuse, AIDS, population education and other
                        projects. The NSS volunteers may work on campus projects for not exceeding 30
                        hours in a year;
                    </li>
                    <li>
                        (iii) The remaining 70 hours will be utilized for community service on the projects in
                        adopted villages/urban slums independently or in collaboration with others in this
                        field, as detailed below:
                        <ol className="m-7 space-y-1">
                            <li>

                                (a)<p className="font-bold inline-block">Institutional work:</p> The students may be placed with selected voluntary
                                organisations working for the welfare of women, children, aged and
                                disabled outside the campus.
                            </li>
                            <li>
                                (b)<p className="font-bold inline-block"> Rural Project:</p> The rural projects generally include the working of NSS
                                volunteers in adopted villages for eradication of illiteracy, watershed
                                management and wasteland development, agricultural operations, health,
                                nutrition, hygiene, sanitation, mother and child care, family life education,
                                gender justice, development of rural cooperatives, savings drives,
                                construction of rural roads, campaign against social evils etc.
                            </li>
                            <li>
                                (c) <p className="font-bold inline-block">Urban Projects:</p> In addition to rural projects other include adult
                                education, welfare of slum dwellers, training in civil defence, traffic
                                control, setting up first-aid posts, work in hospitals, orphanages, destitute
                                home, environment, population education, drug, AIDS awareness, and
                                income generation projects etc. Professional and technical institutions
                                having NSS may have to design appropriate programmes for the
                                community based on the needs.
                            </li>
                            <li>
                                (d) <p className="font-bold inline-block">Natural calamities & National Emergencies:</p> The NSS units are expected
                                to utilize the services of NSS volunteers at the time of natural calamities
                                and national emergencies for mobilizing public support and rendering
                                necessary assistance to the authorities in rescue, relief and rehabilitation.
                                In such emergencies and calamities the Programme Officers are expected
                                to take the initiative and offer the services of the NSS units and its
                                volunteers to assist the administration. For further details please see page
                                No.23 of the Manual.
                            </li>
                            <li>
                                (e) <p className="font-bold inline-block">National Days and Celebrations: </p> The National Service Scheme
                                programmes also include the celebration of National days. The purpose of
                                such a provision is to celebrate such occasions in a befitting manner.
                            </li>
                        </ol>

                    </li>
                </ol>
            </div>
            <Feed/>
        </div>
    )
}

export default Regular
