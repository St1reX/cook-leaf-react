export default function PasswordInput() {
  return (
    <>
      <div className="mb-4">
        <label class="label-text font-medium" for="passwordInput">
          Password
        </label>
        <div className="input max-w-sm">
          <span className="icon-[mingcute--key-2-line] text-base-content/80 my-auto me-3 size-5 shrink-0" />
          <input type="password" className="grow" placeholder="*********" id="passwordInput" />
        </div>
      </div>
    </>
  );
}
