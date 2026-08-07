const CHANNEL_NAME = "codefolio-live-preview";

let channel = null;

function getChannel() {

    if (!channel) {

        channel = new BroadcastChannel(CHANNEL_NAME);

    }

    return channel;

}

export function notifyPortfolioUpdate() {

    getChannel().postMessage({

        type: "PORTFOLIO_UPDATED",
        timestamp: Date.now()

    });

}

export function subscribePortfolioUpdates(callback) {

    const currentChannel = getChannel();

    function handleMessage(event) {

        if (event.data?.type === "PORTFOLIO_UPDATED") {

            callback(event.data);

        }

    }

    currentChannel.addEventListener("message", handleMessage);

    return () => {

        currentChannel.removeEventListener("message", handleMessage);

    };

}