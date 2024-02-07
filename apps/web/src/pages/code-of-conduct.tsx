import { Layout } from "@/components/Layout";
import readDataFile from "@/utilities/readDataFile";

import css from "@/styles/code-of-conduct.module.css";
import Head from "next/head";

type Props = {
  pageData: PageData;
};

const CodeOfConduct = ({ pageData }: Props) => {
  return (
    <Layout pageData={pageData} transparentNav={false}>
      <div className="bg-color-5 py-10 text-white px-10">
        <Head>
          <title>Code of Conduct - DeerHack 2023</title>
        </Head>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-mont text-center text-primary">
          Code of Conduct
        </h1>
        <section className={css.x}>
          <h2>Why a Code of Conduct?</h2>
          <p>
            Nepal&apos;s developer community is constantly developing. We see it
            as our duty to do everything in our power to foster a welcoming and
            secure atmosphere for hackathons and the community at large. We want
            to expand the spaces where people who are otherwise discriminated
            against, harassed, or intimidated can feel safe and secure.
            Hackathons, in our opinion, may advance not just technology but also
            culture. This Code of Conduct exists not merely for its own sake but
            also as a testament to our continued dedication to resolving the
            aforementioned problems.
          </p>

          <h2>Applicability</h2>
          <p>
            All participants, sponsors, and other stakeholders in DeerHack, as
            well as any projects created here, are subject to this Code of
            Conduct.
          </p>

          <h2>The Short Version</h2>
          <p>
            DeerHack is dedicated to providing an inclusive hackathon
            environment for all participants, regardless of gender, gender
            identity, and expression, age, sexual orientation, disability,
            physical appearance, body size, color, ethnicity, religion (or lack
            thereof), or technological preferences. Any form of harassment of
            our participants is not acceptable. At DeerHack, profane language
            and imagery included in presentations during workshops and/or in
            internet media are not acceptable. Participants who violate these
            rules may be sanctioned or dismissed from the event. We are
            committed to providing a welcoming and encouraging developer
            community. Participants from all walks of life are welcome, and we
            respect each and every one of them.
          </p>

          <h2>No Plagiarism or Re-Use of Past Work </h2>
          <p>
            Only projects developed during DeerHack will be considered. However,
            you must disclose the extent of the prior use with your submission
            if you desire to submit projects that contain previously used code
            or re-submit a project that you previously submitted to another
            hackathon. If it is discovered during an inspection that the project
            has reused code that was not disclosed with the submission, the
            organizer may ask the participant to describe the connections and
            differences between the old and new work, or they may disqualify the
            submission from receiving awards on its own merits.
          </p>

          <h2>Rules for Participants:</h2>
          <ul>
            <li>
              Participants of all ages, genders, and geographies are welcome.
            </li>
            <li>
              To attend DeerHack, the age is limited to students who are between
              18 and 25 years old.
            </li>
            <li>
              Members of the organizing committee or Deerwalk Institute of
              Technology are not eligible to participate in DeerHack.
            </li>
            <li>
              Participants in IT and graphic design must be familiar with
              programming, graphic and web design, UI development, cloud
              computing, mobile computing, solutions architecture, and so on.
            </li>
            <li>
              Shortlisted applicants must produce the following documentation
              upon request of the organizers:
            </li>
            <ul>
              <li>The applicant&apos;s college Identity Card.</li>
              <li>Examples of the candidate&apos;s work or portfolio.</li>
            </ul>
            <li>
              Consumption of any illegal substances inside the Deerwalk Complex premises is strictly forbidden. If found, disciplinary actions will be taken.
            </li>
          </ul>

          <h2>Rules for Team Formation</h2>
          <ul>
            <li>Teams can have a maximum of five members.</li>
            <li>Each team must have at least three members.</li>
            <li>
              All teams should consider creating a multi-disciplinary team which
              in turn can attract benefits related to marks allotment during the
              Demo Day.
            </li>
            <li>
              Changes to team members are not allowed after team formation
              unless the committee finds the reason to be legitimate.
            </li>
          </ul>

          <h2>Rules for Project Development</h2>
          <ul>
            <li>
              No development should begin before the event&apos;s actual date
              and time. Any teams found violating this condition will be
              disqualified immediately. Yet, it is recommended that you plan
              ahead of time and structure your idea.
            </li>
            <li>Written documentation and design sketches are permitted.</li>
            <li>
              Any software development tools, game engines, IDE, and programming
              language that conforms to the Creative Commons License agreement
              standard or is freely available and/or you have a license to use
              them can be used during the event.
            </li>

            <li>Upon request, proof of license must be provided.</li>
            <li>
              A team cannot produce software that encourages racism, sexuality,
              nudity, or other code of conduct violations.
            </li>
          </ul>

          <h2>Rules for Project Submission</h2>
          <ul>
            <li>
              Only registered teams will be permitted to submit their product.
            </li>
            <li>
              The project&apos;s content should not be plagiarized and must be
              the team&apos;s original work.
            </li>
            <li>
              During each step of the hackathon, all teams must guarantee that
              components are submitted in the prescribed formats properly.
            </li>
            <li>
              All work will be thoroughly examined by an expert panel, and
              appropriate grades will be assigned.
            </li>
            <li>
              The panel&apos;s judgment will be final, but teams may request
              feedback from the experts.
            </li>
            <li>
              Following the completion of the third phase (Product Development),
              at least one member from each team will be required to present to
              the judges.
            </li>
          </ul>

          <h2>No Harassment Policy</h2>
          <p>
            We do not tolerate any form of harassment of hackathon participants,
            including offensive verbal discrimination, public display of sexual
            material in public settings, willful disruption, intentional
            intimidation, stalking, inappropriate physical contact, unwanted
            sexual advances, and taking pictures and audio/video recordings
            without the subject&apos;s consent.
          </p>

          <h2>Reporting Guidelines</h2>
          <p>
            Please get in touch with a member of our staff right away if you are
            experiencing harassment, see someone else experiencing harassment,
            are worried about the event&apos;s safety and the participants&apos;
            health, find any violations of this Code of Conduct, notice any
            other suspicious activity, or have any other concerns. We will
            gladly assist participants in contacting security or in finding
            other ways to make individuals who are being harassed feel secure
            throughout the hackathon.
          </p>
          <p>
            DeerHack members will be identifiable by their distinct uniforms and
            IDs.
          </p>
          <strong>All reports will be kept confidential.</strong>

          <h2>Consequences of Violations</h2>
          <p>
            Failure to follow the above-mentioned Rules and Code of Conduct may
            result in (at the discretion of the organizers):
          </p>
          <ul>
            <li>Disqualification of the offending team.</li>
            <li>
              Barring their access to DeerHack resources and/or any facilities
              to be provided.
            </li>
            <li>Reporting of their actions to local law enforcement.</li>
          </ul>

          <h2>Addressing Grievances</h2>
          <p>
            If you believe you have been falsely or unfairly accused of
            breaching this Code of Conduct, please alert a member of the
            organizing team and provide a brief summary of your grievance. Our
            committee will handle your complaint in accordance with our existing
            internal governing policies.
          </p>
        </section>
        <div className="mt-8 container max-w-5xl mx-auto font-poppins">
          <hr className="mb-5 container" />
          <p>If you have questions regarding your application, contact:</p>
          <strong>Prayatna Mishra </strong>:{" "}
          <a href="tel:9860050391">9860050391</a>
          <br />
          <strong>Bipashree Aryal</strong>:{" "}
          <a href="tel:9840033009">9840033009</a>
        </div>
      </div>
    </Layout>
  );
};

export default CodeOfConduct;

export async function getStaticProps() {
  const pageData = await readDataFile("pagedata.json");

  return {
    props: {
      pageData: pageData,
    },
  };
}
