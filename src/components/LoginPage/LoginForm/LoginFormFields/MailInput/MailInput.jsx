export default function MailInput() {
  return (
    <>
      <div>
        <label class="label-text font-medium" for="mailInput">
          E-Mail
        </label>
        <div className="input max-w-sm">
          <span className="icon-[tabler--user] text-base-content/80 my-auto me-3 size-5 shrink-0" />
          <input type="text" className="grow" placeholder="mail@example.com" id="mailInput" />
        </div>
      </div>
    </>
  );
}
