export type EnquiryResult = "sent" | "demo";

const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export async function submitEnquiry(form: HTMLFormElement): Promise<EnquiryResult> {
  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return "demo";
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: new FormData(form),
  });

  if (!response.ok) throw new Error(`Enquiry failed with status ${response.status}`);
  return "sent";
}
