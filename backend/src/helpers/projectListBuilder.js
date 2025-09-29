

const projectListBuilder = (projectList, projects) => {

  projectList['projects'] = projects.map(project => ({
    title: project.attributes.title,
    slug: project.attributes.slug,
    summary: project.attributes.summary,
    status: project.attributes.status,
    media: project.attributes.media
  }))

  return projectList
}

export default projectListBuilder
