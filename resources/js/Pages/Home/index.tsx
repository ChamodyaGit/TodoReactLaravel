import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

const Home = () => {
    return (
        <AppLayout>
            <Head title="Home" />
            <div className="text-center">
                <h1 className="display-4">Welcome to the To-Do App</h1>
                <p>Manage your tasks</p>
            </div>
        </AppLayout>
    )
};

export default Home;
