import React from 'react'

export default function ProjectCard({ name, src, alt, category, stack, liveDemoUrl, gitHubUrl, isRepoPrivate, key }) {
    return (
        <div className="project-card" key={key}>
            <div className='img-container'>
                <img src={src} alt={alt} />
                <h5>{category}</h5>
            </div>
            <h3>{name}</h3>
            <p>{stack}</p>
            <div className='button-container'>
                <a href={liveDemoUrl} target='_blank' rel="noopener noreferrer" className="demo-btn btn">Live Demo</a>
                {isRepoPrivate ?
                    <a
                        href={`mailto:karoly.webdev@gmail.com?subject=Repository access request&body=Hi Karoly,%0A%0APlease give me access to your ${encodeURIComponent(name)} repository.`}
                        className="github-btn btn"
                    >
                        Request GitHub Access
                    </a> :
                    <a href={gitHubUrl} target='_blank' rel="noopener noreferrer" className="github-btn btn">GitHub</a>
                }
            </div>
        </div>
    )
}
