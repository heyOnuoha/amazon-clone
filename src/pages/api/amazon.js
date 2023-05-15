import { ethers } from "ethers";

export default async function handler(req, res) {
    const { amount, id, name, description, image } = JSON.parse(req.body);

    if (req.method === "POST") {
        const headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer 0e34a80f-d00d-40fc-8c58-837b6fb4f106",
        };

        const result = await fetch(
            "https://withpaper.com/api/2022-08-12/checkout-link-intent",
            {
                method: "POST",
                headers,
                body: JSON.stringify({
                    contractId: "a665a877-595c-49ef-b84a-23c947059438",
                    title: name,
                    description: description,
                    imageUrl: image,
                    expiresInMinutes: 15,
                    limitPerTransaction: 5,
                    redirectAfterPayment: false,
                    sendEmailOnCreation: false,
                    requireVerifiedEmail: false,
                    quantity: 1,
                    metadata: {},
                    mintMethod: {
                        name: "buy",
                        args: {
                            _id: id,
                            _buyer: "$WALLET",
                        },
                        payment: {
                            currency: "ETH",
                            value: ethers.utils.formatUnits(
                                amount.toString(),
                                "ether"
                            ),
                        },
                    },
                    feeBearer: "BUYER",
                    hideNativeMint: true,
                    hidePaperWallet: false,
                    hideExternalWallet: false,
                    hidePayWithCard: false,
                    hidePayWithCrypto: false,
                    hidePayWithIdeal: true,
                    sendEmailOnTransferSucceeded: true,
                }),
            }
        ).then((res) => res.json());

        return res.status(200).json(result);
    }

    return res.status(200).json({ message: "Amazon Clone Backend" });
}
