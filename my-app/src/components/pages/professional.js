import React, { Component } from 'react';


class Professional extends Component {
  render() {
    return (
      <div className="container-fluid">

        <h1>
          Professional
        </h1>

        
            <h4>Skills</h4>
      
            <div>Languages | Python, JavaScript, HTML, CSS, SQL</div>
            <div>Frameworks & Libraries | Flask, SQLAlchemy, Django, AngularJS, Bootstrap, Jinja, NLTK, Spacy</div>
            <div>Database & Industry Tools | PostgreSQL, Git, GitHub, Command Line, Docker</div>
            <div>Tools/Software | Praat, SPSS</div>
            <div>Natural Languages | Portuguese: Native, English: Near native, Spanish: Near native, French: Fluent, Italian: Conversational</div>
            <br/>

            <h4>Main Projects</h4>

            Language Learning – Designed and programmed command-line Python app using Git/GitHub
            <br/>

            Dining Hero - Developed food recommendation web app, integrated with Google Places API and Twilio API, utilized 3rd party libraries, incorporated Postgres ORM to query database, applied test-driven development
            <br/>
            <br/>

            <h4>Work Experience</h4>

            <h5>Intern, Texas Advanced Computing Center, the University of Texas at Austin</h5>
            
            - Built and tested AngularJS and Django based web applications to allow research scientists to send workloads to supercomputers and validate/view results,<br/>
            - Added new features and fixed bugs<br/>
            - Tracked and communicated about user stories / bugs with JIRA<br/>
            - Used Docker / Docker Compose for consistency / sanitization of environments<br/>
            - Created asynchronous Celery tasks for long-running processes<br/>
            - Refactored codebase and increased test coverage<br/>
            <br/>
        

      </div>
    );
  }
}

export default Professional;