import { data } from '../../public/resumeData'

export function getAllProjects(slug) {
	const { projects } = data.portfolio

	if (slug) {
		return projects.filter((p) => p.url === slug)
	}

	return projects
}
