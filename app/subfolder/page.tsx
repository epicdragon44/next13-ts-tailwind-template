export default function Page({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { id: string };
}) {
    return (
        <>
            Subpage
            <p>{params.slug}</p>
            <p>{searchParams.id}</p>
        </>
    );
}
