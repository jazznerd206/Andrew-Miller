import React, { useState, useEffect } from 'react';
import PieChart from './charts/PieChart';
import { ProjectContainer, ProjectList, ProjectItem, ItemBox, ItemCol, Topic, Title, Description, Dates, Languages, RepoName, RepoFacts, Fact } from '../../styled/projects.style';

function Projects2() {

    const projectsList = [
        'React_Graph',
        'CH-inventory',
        'Standard_10',
        'tabylon',
        'Google-Books-Search-Engine',
        'DataStructures',
        'KandR',
        'appogiatura',
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
                fetch(`https://api.github.com/repos/jazznerd206/${item}`)
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
                        <div key={item.id}>
                            <ProjectItem>
                                <ItemBox>
                                    <Title>
                                        <RepoName>
                                            {item.name}
                                        </RepoName>
                                    </Title>
                                    <Description>{item.description}</Description>
                                    <ItemCol>
                                        <Dates>
                                            <p>Created: {item.created_at.substring(0,10)}</p>
                                            <p>Last Update: {item.updated_at.substring(0,10)}</p>
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