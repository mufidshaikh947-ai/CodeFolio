import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Button from "../components/common/Button";
import PageContainer from "../components/ui/PageContainer";
import PageHeader from "../components/ui/PageHeader";
import SectionCard from "../components/ui/SectionCard";
import SectionHeader from "../components/ui/SectionHeader";
import LoadingState from "../components/ui/LoadingState";
import EmptyState from "../components/ui/EmptyState";
import StatusBadge from "../components/ui/StatusBadge";
import FormActions from "../components/ui/FormActions";

import {
    getMessages,
    markAsRead,
    markAsReplied,
    deleteMessage
} from "../services/contactService";

function MessagesPage() {

    const [messages, setMessages] = useState([]);
    const [fetching, setFetching] = useState(true);

    async function loadMessages() {

        try {

            const response = await getMessages();

            setMessages(response.messages);

        }

        catch (error) {

            toast.error("Failed to load messages.");

        }

        finally {

            setFetching(false);

        }

    }

    useEffect(() => {

        loadMessages();

    }, []);

    async function handleRead(id) {

        try {

            const response = await markAsRead(id);

            toast.success(response.message);

            loadMessages();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Operation failed."

            );

        }

    }

    async function handleReplied(id) {

        try {

            const response = await markAsReplied(id);

            toast.success(response.message);

            loadMessages();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Operation failed."

            );

        }

    }

    async function handleDelete(id) {

        if (!window.confirm("Delete this message?")) return;

        try {

            const response = await deleteMessage(id);

            toast.success(response.message);

            loadMessages();

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Delete failed."

            );

        }

    }

    if (fetching) {

        return <LoadingState text="Loading Messages..." />;

    }
const sortedMessages = [...messages].sort((a, b) => {

    return new Date(b.createdAt) - new Date(a.createdAt);

});

    return (

<PageContainer>
            <PageHeader
    title="Messages"
    description="View and manage messages submitted through your public portfolio."
/>
<SectionCard>

    <SectionHeader
        title="Inbox"
        subtitle="Messages received from your portfolio contact form."
    />
                {messages.length === 0 ? (

                   <EmptyState
    title="No Messages"
    description="Messages sent through your portfolio will appear here."
/>

                ) : (

                    sortedMessages.map((message) => (

                        <div
                            key={message._id}
                            className="rounded-xl border border-slate-200 p-6 transition-all duration-200 hover:border-slate-300"
                        >

                            <div className="flex items-start justify-between">

                                <div className="flex-1">

                                    <div className="flex flex-wrap items-center gap-3">

                                        <h2 className="text-xl font-bold text-slate-800">

                                            {message.name}

                                        </h2>

                                        <a
    href={`mailto:${message.email}`}
    className="text-sm text-blue-600 hover:underline"
>
    {message.email}
</a>

                                    </div>

                                    <h3 className="mt-3 text-lg font-semibold text-slate-700">

                                        {message.subject}

                                    </h3>

                                    <p className="mt-3 whitespace-pre-wrap text-slate-600">

                                        {message.message}

                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">

    <StatusBadge color={message.isRead ? "green" : "yellow"}>

        {message.isRead ? "Read" : "Unread"}

    </StatusBadge>

    <StatusBadge color={message.replied ? "blue" : "gray"}>

        {message.replied ? "Replied" : "Pending Reply"}

    </StatusBadge>

    {message.createdAt && (

        <StatusBadge color="gray">

            {new Date(message.createdAt).toLocaleDateString()}

        </StatusBadge>

    )}

</div>

                                </div>

                                <FormActions className="mt-6 border-0 pt-0">

    {!message.isRead && (

        <Button

            type="button"

            variant="secondary"

            onClick={() => handleRead(message._id)}

        >

            Mark Read

        </Button>

    )}

    {!message.replied && (

        <Button

            type="button"

            onClick={() => handleReplied(message._id)}

        >

            Mark Replied

        </Button>

    )}

    <Button

        type="button"

        variant="danger"

        onClick={() => handleDelete(message._id)}

    >

        Delete

    </Button>

</FormActions>

                            </div>

                        </div>

                    ))

                )}

</SectionCard>
</PageContainer>
    );

}

export default MessagesPage;