import React, { Component } from 'react';


class Professional extends Component {
  render() {
    return (
      <div className="container-fluid">

        <h1>
          Professional
        </h1>

        <p>
            Skills
      
            Languages | Python, JavaScript, HTML, CSS, SQL
            Frameworks & Libraries | Flask, SQLAlchemy, Django, AngularJS, Bootstrap, Jinja, NLTK, Spacy
            Database & Industry Tools | PostgreSQL, Git, GitHub, Command Line, Docker
            Tools/Software | Praat, SPSS
            Natural Languages | Portuguese: Native, English: Near native, Spanish: Near native, French: Fluent, Italian: Conversational
        

            Main Projects

            Language Learning – Designed and programmed command-line Python app using Git/GitHub

            Dining Hero - Developed food recommendation web app, integrated with Google Places API and Twilio API, utilized 3rd party libraries, incorporated Postgres ORM to query database, applied test-driven development


            Work Experience

            Intern, Texas Advanced Computing Center, the University of Texas at Austin
            
            - Built and tested AngularJS and Django based web applications to allow research scientists to send workloads to supercomputers and validate/view results
            - Added new features and fixed bugs
            - Tracked and communicated about user stories / bugs with JIRA
            - Used Docker / Docker Compose for consistency / sanitization of environments
            - Created asynchronous Celery tasks for long-running processes
            - Refactored codebase and increased test coverage

        </p>

      </div>
    );
  }
}

export default Professional;