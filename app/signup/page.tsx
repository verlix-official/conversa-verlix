import { SignupForm } from "@/components/signup-form"

export default function Page() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center pt-24 px-6 md:px-10">
            <div className="w-full max-w-sm">
                <SignupForm />
            </div>
        </div>
    )
}
