import React from "react";
import logo from "../images/nss.png";
import "./css/about.css";
// import Announcement from "../components/announcement";

const About = () => {
  return (
    <div className="bg-opacity-75  bg-gradient-to-r from-white-800 via-blue-500 to-white-800">
      <div class="field-content text-center">
        <p className="text-center bg-red-200 p-3">
          <strong>National Service Scheme (NSS)</strong>
        </p>
        <p className="text-center bg-gray-200 ">
          <strong>About National Service Scheme (NSS)</strong>
        </p>
        <p className="break-normal p-5 m-3">
          National Service Scheme (NSS) is an initiative of the Ministry of
          Youth Affairs and Sports of the Government of India. After the
          Independence of our Nation, there was an urge for introducing social
          service for students and the idea of involving students in the task of
          national service was that they should always keep their social
          responsibility before themselves. The first education commission,
          Central Advisory Board of Education (CABE) at its meeting in January
          1950 recommended the introduction of national service scheme by
          students voluntarily. In 1958 Jawaharlal Nehru, in a letter to the
          chief ministers, made recommendation to prepare a scheme for
          compulsory national service by students as a prerequisite for
          graduation. In May 1969, a conference of student representatives (of
          universities and institutions of higher education) convened by the
          Ministry of Education and the University Grants Commission also
          unanimously agreed that a national-service scheme could be an
          instrument for national integration. On 24 September 1969, the then
          Union Education Minister V.K.R.V. Rao launched the NSS at 37
          universities all states. It was appropriate that the program was
          launched during the Gandhi Centenary Year as it was Gandhi ji who
          inspired the Indian youth to participate in the movement for Indian
          independence and the social uplift of the downtrodden masses of our
          nation. Due to heartily reponses of students, the scheme has been
          excellent and extended to all states and universities in the country.
        </p>
        <p className="break-normal p-5 m-3">
          It provides an opportunity to the student youth of 11th & 12th Class
          of schools at +2 Board level and student youth of Technical
          Institution, Graduate & Post Graduate at colleges and University level
          of India to take part in various government led community service
          activities & programs.
        </p>
        <p className="text-center p-3">
          <strong>National Service Scheme in CSVTU</strong>:
        </p>
        <p className="break-normal p-5 m-3">
          The National Service Scheme Started in Chhattisgarh Swami Vivekanand
          Technical University (CSVTU) in June 2009 with 6 Units at that time.
          Currently, there reside 67 Units under NSS scheme in CSVTU with more
          than 5650 Students working hard at creating a better environment and
          sending a positive message in the world. Our university volunteers
          have left their mark at many heights like Pre-RD, RD , National Awards
          and State awards and have bagged awards at these platforms for the
          last 3 consecutive years. Currently, there are 42 Adopted Villages by
          our units under CSVTU.
        </p>
        {/* <p className="break-normal p-5 m-3">
          {" "}
          NSS (National Service Scheme) programme is organized by the students
          of SSGI themselves, and both students and teachers through their
          combined participation in community service, get involved in the tasks
          of nation building. It is a voluntary service where students will
          develop their personality through social service. NSS at SSGI is aimed
          at providing each student with a significant context in which he/she
          can reach a deeper understanding of working with unity for nation
          building. What We Do?? By the spirit of selfless service, NSS
          volunteers try to cater the society in best possible manner and hence
          arrive at a set of values integral to the Indian philosophy of life.
          NSS stipulates that the welfare of an individual is ultimately
          dependent on the welfare of the society as a whole. This expresses the
          essence of democratic living and upholds the need of selfless service
          and appreciation of the other man's effort and also respect for fellow
          human beings, environment and wildlife. Our camps are held in nearby
          villages where attempts are made to improve educational conditions for
          the school students. Activities like Educational drives, cleanliness
          campaigns and environment awareness drives are actively taken up by
          NSS. What We Believe?? The motto or watchword of the National Service
          Scheme is 'NOT ME BUT YOU'. This reflects the essence of democratic
          living and upholds the need for selfless service and appreciation of
          the other person's point of view and also to show consideration for
          fellow human beings. It underlines that the welfare of an individual
          is ultimately dependent on the welfare of society on the whole.
          Therefore, it should be the aim of the NSS to demonstrate this motto
          in its day-today programme. What We Aim For?? • To understand the
          community in which we work. • To understand ourselves in relation to
          the community. • To identify the needs and problems in the community
          and find solution in which we can be involved. • To develop among
          ourselves a sense of better social and civic responsibility. • To
          apply our education in finding practical solutions to individual and
          community problems. • To develop the competence required for group
          living and sharing responsibilities 
        </p> */}
        <p className="text-center p-3">
          <strong>The NSS Badge Proud to Serve the Nation</strong>:
        </p>
        <div className="flex scroll-table1 justify-center w-full p-3">
          <div className="scroll-table ">
            <table>
              <tbody className="border-black border-2">
                <tr>
                  <td style={{ width: "90px" }}>
                    <p>
                      <img src={logo} />
                    </p>
                  </td>
                  <td style={{ width: "409px", padding: "10px" }}>
                    <p>
                      All the youth volunteers who opt to serve the nation
                      through the NSS led community service wear the NSS badge
                      with pride and a sense of responsibility towards helping
                      needy.
                    </p>
                    <p>
                      The Konark wheel in the NSS badge having 8 bars signifies
                      the 24 hours of a the day, reminding the wearer to be
                      ready for the service of the nation round the clock i.e.
                      for 24 hours.
                    </p>
                    <p>
                      Red colour in the badge signifies energy and spirit
                      displayed by the NSS volunteers.
                    </p>
                    <p>
                      The Blue colour signifies the cosmos of which the NSS is a
                      tiny part, ready to contribute its share for the welfare
                      of the mankind.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p className="text-center text-xl p-3">
        <strong>
          <u>Motto:</u>
        </strong>
      </p>
      <p className="text-center text-xl p-3">
        The motto of National Service Scheme is <strong>NOT ME BUT YOU</strong>
      </p>
      <p className="text-center text-xl p-3">
        <strong>Benefits of Being a NSS Volunteer:</strong>
      </p>
      <p className="text-center text-xl p-3">
        A NSS volunteer who takes part in the community service programme would
        either be a college level or a senior secondary level student. Being an
        active member these student volunteers would have the exposure and
        experience to be the following:
      </p>
      <ul className="relative text-center text-xl ">
        <li>an accomplished social leader</li>
        <li>an efficient administrator</li>
        <li>a person who understands human nature</li>
      </ul>
    </div>
  );
};

export default About;
