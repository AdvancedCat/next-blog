import Link from 'next/link';

function IssueList({ issues }) {
    return (
        <ul>
            {issues.map((issue, idx) => {
                return (
                    <li key={issue.id}>
                        <article>
                            <h2>{issue.title}</h2>
                            <p>{issue.summary}</p>
                            <p>
                                <Link href={`/issues/${issue.id}`}>
                                    View Detail
                                </Link>
                            </p>
                        </article>
                    </li>
                );
            })}
        </ul>
    );
}

export default IssueList;
