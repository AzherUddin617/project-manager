import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getProjects = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const projects = await prisma.project.findMany();
		res.json(projects);
	} catch (error) {
		res.status(500).json({ error: "Error getting projects" });
	}
};

export const createProject = async (
	req: Request,
	res: Response
): Promise<void> => {
	const { name, description, startDate, endDate } = req.body;
	try {
		const project = await prisma.project.create({
			data: {
				name,
				description,
				startDate,
				endDate,
			},
		});
		res.status(201).json(project);
	} catch (error: any) {
		res.status(500).json({
			error: "Error creating project " + error.message,
		});
	}
};
