import React, { useState, useEffect } from 'react';
import PieChart from './charts/PieChart';
import { ProjectContainer, ProjectList, ProjectItem, ItemBox, ItemCol, Topic, Title, Description, Dates, RepoName, RepoFacts, Fact, CardLink } from '../../styled/projects.style';

function Projects2() {

    const projectsList = [
        'ReacT9',
        'React_Graph',
        'tabylon',
        'Standard_10',
        'appogiatura',
        'CH-inventory',
        'Google-Books-Search-Engine',
        'DataStructures',
        'KandR',
        'Connect_Four',
        'RAF_Party',
    ]

    const [ projects, setProjects ] = useState([]);

    useEffect(() => {
        const getLangs = endpoint => {
            let langs = [];
            let total = 0;
            fetch(endpoint)
                .then(response => response.json())
                .then(data => {
                    for (const [key, value] of Object.entries(data)) {
                        const newItem = {
                            key: key,
                            data: value,
                        }
                        langs.push(newItem);
                        total += value;
                    }
                    langs.forEach((key, value) => {
                        value = (value / total * 100).toFixed(1)
                    })
                })
            return langs;
        }
        const f = () => {
            projectsList.forEach(item => {
                fetch(`https://api.github.com/repos/jazznerd206/${item}`, {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'no-cache',
                    credentials: 'same-origin',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    redirect: 'follow',
                    referrerPolicy: 'no-referrer',
                  })
                    .then(response => response.json())
                    .then(data => {
                        const newItem = {
                            name: data.name,
                            description: data.description,
                            created_at: data.created_at,
                            updated_at: data.updated_at,
                            stars: data.stargazers_count,
                            watchers: data.watchers_count,
                            topics: data.topics,
                            languages: getLangs(data.languages_url),
                            codeLink: data.html_url,
                        }
                        setProjects(projects => [...projects, newItem])
                    })
            })
        }
        f();
    }, [])

    return (
        <ProjectContainer>
            <ProjectList>
                {projects.map(item => {
                    return (
                        <div key={`project-${item.name}`}>
                            <ProjectItem>
                                <ItemBox>
                                    <Title>
                                        <RepoName>
                                            {item.name}
                                        </RepoName>
                                    </Title>
                                    <CardLink href={item.codeLink} target="_blank" rel="noreferrer noopener"><p>Code repo</p></CardLink>
                                    <Description>{item.description}</Description>
                                    <ItemCol>
                                        <Dates>
                                            <p>Created: {item.created_at?.substring(0,10)}</p>
                                            <p>Last Update: {item.updated_at?.substring(0,10)}</p>
                                        </Dates>
                                    </ItemCol>
                                </ItemBox>
                                <ItemBox>
                                    <RepoFacts>
                                        <Fact>{'🔎'}{item.watchers}</Fact>
                                        <Fact>{'⭐️'} {item.stars}</Fact>
                                    </RepoFacts>
                                    <PieChart height={250} width={350} data={item.languages} />
                                    <ItemCol>
                                        {item.topics.map(topic => {
                                            return (
                                                <Topic key={item.name + topic}>
                                                    {topic}
                                                </Topic>
                                            )
                                        })}
                                    </ItemCol>
                                </ItemBox>
                            </ProjectItem>
                        </div>
                    )
                })}
            </ProjectList>
        </ProjectContainer>
    )
}

export default Projects2;