import React from "react";
const Layout = ({ header, form, workflow }: { header?: React.ReactNode, form?: React.ReactNode, workflow?: React.ReactNode }) => (
    <div className="flex flex-col h-screen h bg-red-400">
        <div className="bg-blue-300">
            <React.Suspense fallback={<h1>Loading</h1>}>

                {header ? header : <div className="h-full w-full bg-gray-300">I am fallback</div>}
            </React.Suspense>
        </div>
        <div className="flex h-full">
            <div className="bg-yellow-200">
                Workflow
            </div>
            <div className="flex-1 flex justify-center items-center bg-green-300">
                <React.Suspense fallback={<h1>Loading</h1>}>
                    {/* <ErrorBoundary fallback={<div className="h-full w-full bg-gray-300">I am fallback</div>}> */}
                    {form ? form : <div className="h-full w-full bg-gray-300">I am fallback</div>}
                    {/* </ErrorBoundary> */}
                </React.Suspense>
            </div>
        </div>
    </div>
)

export default Layout;