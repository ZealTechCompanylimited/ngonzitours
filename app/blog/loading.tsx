import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogLoading() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Skeleton className="mb-4 h-10 w-1/2" />
      <Skeleton className="mb-8 h-6 w-3/4" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="flex flex-col">
            <Skeleton className="h-48 w-full rounded-t-lg" />
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-6 w-3/4" />
              </CardTitle>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </CardHeader>
            <CardContent className="flex-grow">
              <Skeleton className="h-4 w-1/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
