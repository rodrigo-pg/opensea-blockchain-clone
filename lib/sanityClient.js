import sanityClient from "@sanity/client"

export const client = sanityClient({
    projectId:"s77f4x7l",
    dataset: "production",
    apiVersion: "2021-03-25",
    token:"skqKOzsFMHruv7xPtsr4SJApGTOATSQd0RpDGz8XEif3HnQ8YbBhPr5ONRv4AKKkam9uMvSomZPD1LzR8jeGZ9TJHYsHxhKbEzvDXCoHJG2zfRmujUTIb4wHsbaNntJC9msuVOWk0NhE5AQQ0cVgdAeRDBYuOsGxNL3DlEanV5h9WhNrjRZi",
    useCdn:false
})