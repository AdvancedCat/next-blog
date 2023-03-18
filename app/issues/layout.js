import { PrismaClient } from '@prisma/client';

import IssueList from './IssueList';

import classes from './layout.module.css';

async function IssuesLayout({ children }) {
    const prisma = new PrismaClient();
    const issues = await prisma.issue.findMany();

    return (
        <div className={classes.layout}>
            <aside className={classes.sidebar}>
                <IssueList issues={issues}></IssueList>
            </aside>
            {children}
        </div>
    );
}

export default IssuesLayout;
