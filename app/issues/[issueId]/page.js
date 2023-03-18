import { PrismaClient } from '@prisma/client'
import { wait } from '../../../util/time'

import IssueDetail from './IssueDetail'

async function IssueDetailsPage({params}){
    const prisma = new PrismaClient()
    const issue = await prisma.issue.findFirst({where: {id: +params.issueId}})

    // await wait(3)

    if(!issue){
        throw new Error('Issue not found')
    }

    console.log(issue)

    return <IssueDetail issue={issue}></IssueDetail>
}

export default IssueDetailsPage