/**
 * WhatsAppChat.tsx
 * Floating WhatsApp chat button — bottom-right corner.
 * Opens a mini chat popup before redirecting to wa.me.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

/* ── Config ─────────────────────────────── */
const PHONE = "919313071572"; // country code (91) + number
const DEFAULT_MSG = encodeURIComponent(
  "Hi Webify! 👋 I'd like to know more about your services."
);
const WA_URL = `https://wa.me/${PHONE}?text=${DEFAULT_MSG}`;

/* ── WhatsApp SVG icon (official green brand) ── */
const WhatsAppIcon = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="#25D366" />
    <path
      d="M23.472 8.516A10.17 10.17 0 0 0 16.003 5.5C10.756 5.5 6.494 9.762 6.49 15.01c0 1.683.44 3.325 1.277 4.77L6.41 24.5l4.84-1.27a10.206 10.206 0 0 0 4.748 1.21h.004c5.245 0 9.508-4.263 9.51-9.511a9.46 9.46 0 0 0-2.04-6.413Zm-7.469 14.636h-.003a8.487 8.487 0 0 1-4.325-1.183l-.31-.184-3.215.843.858-3.133-.202-.321a8.47 8.47 0 0 1-1.299-4.464c.003-4.687 3.815-8.5 8.5-8.5a8.454 8.454 0 0 1 6.007 2.49 8.454 8.454 0 0 1 2.485 6.01c-.004 4.688-3.817 8.502-8.496 8.442Zm4.662-6.364c-.256-.128-1.515-.748-1.749-.833-.235-.085-.406-.128-.577.128-.171.256-.662.833-.812 1.004-.149.171-.299.192-.554.064-.256-.128-1.08-.398-2.057-1.27-.76-.678-1.274-1.515-1.423-1.77-.15-.257-.016-.395.112-.523.116-.114.257-.299.385-.449.128-.15.171-.257.257-.428.085-.171.043-.32-.021-.449-.064-.128-.577-1.39-.79-1.902-.208-.5-.42-.432-.577-.44l-.492-.008c-.17 0-.449.064-.684.32s-.898.877-.898 2.139c0 1.261.92 2.48 1.048 2.65.128.171 1.81 2.762 4.385 3.874.613.264 1.09.422 1.463.54.615.196 1.175.168 1.617.102.493-.073 1.515-.62 1.729-1.218.213-.598.213-1.111.149-1.218-.063-.107-.234-.171-.49-.299Z"
      fill="white"
    />
  </svg>
);

/* ─────────────────────────────────────────────────────────────────────────── */
const WhatsAppChat = () => {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  /* Show the greeting bubble automatically after 3 s */
  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const handleOpen = () => {
    setOpen((prev) => !prev);
    setShowBubble(false);
  };

  const handleChat = () => {
    window.open(WA_URL, "_blank", "noopener,noreferrer");
  };

  return (
    /* Fixed to bottom-right — above any footer z-index */
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">

      {/* ── Popup card ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="popup"
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative w-[290px] rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "linear-gradient(135deg,#0d1b2a 0%,#0a2a1a 100%)",
              border: "1px solid rgba(37,211,102,0.25)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{ background: "rgba(37,211,102,0.12)" }}
            >
              {/* Avatar */}
              <div
                className="relative flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: "rgba(37,211,102,0.2)" }}
              >
                <WhatsAppIcon size={24} />
                {/* Online dot */}
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#0d1b2a]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm leading-tight">WebifyTechnologies Support</p>
                <p className="text-[#25D366] text-xs mt-0.5">● Online Now</p>
              </div>
              {/* Close */}
              <button
                onClick={handleOpen}
                className="text-white/50 hover:text-white transition p-1 rounded-full hover:bg-white/10"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat bubble */}
            <div className="px-4 py-4 space-y-3">
              {/* Bot message */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="flex items-end gap-2"
              >
                <div
                  className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background: "rgba(37,211,102,0.2)" }}
                >
                  <WhatsAppIcon size={16} />
                </div>
                <div
                  className="rounded-2xl rounded-bl-sm px-3 py-2.5 text-white text-xs leading-relaxed max-w-[210px]"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  👋 Hi there! How can <strong>Webify</strong> help you today?
                  <br />
                  <span className="text-white/50 text-[10px]">Typically replies instantly</span>
                </div>
              </motion.div>

              {/* Quick reply chips */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="flex flex-wrap gap-2 ml-9"
              >
                {["💼 Services", "💰 Pricing", "🚀 Get Started"].map((chip) => (
                  <button
                    key={chip}
                    onClick={handleChat}
                    className="text-[11px] px-2.5 py-1 rounded-full border transition"
                    style={{
                      borderColor: "rgba(37,211,102,0.4)",
                      color: "#25D366",
                      background: "rgba(37,211,102,0.07)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "rgba(37,211,102,0.18)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "rgba(37,211,102,0.07)";
                    }}
                  >
                    {chip}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* CTA button */}
            <div className="px-4 pb-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleChat}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm text-white transition"
                style={{ background: "linear-gradient(90deg,#25D366,#128C7E)" }}
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Auto greeting bubble (shown after 3 s, before user opens) ── */}
      <AnimatePresence>
        {showBubble && !open && (
          <motion.div
            key="greeting"
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative px-4 py-2.5 rounded-2xl rounded-br-sm text-white text-xs font-medium shadow-xl cursor-pointer max-w-[200px] text-right"
            style={{
              background: "linear-gradient(135deg,#25D366,#128C7E)",
              boxShadow: "0 4px 24px rgba(37,211,102,0.4)",
            }}
            onClick={handleOpen}
          >
            👋 Need help? Chat with us!
            {/* Arrow */}
            <span
              className="absolute -bottom-2 right-4 w-0 h-0"
              style={{
                borderLeft: "7px solid transparent",
                borderRight: "0px solid transparent",
                borderTop: "8px solid #128C7E",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main floating button ── */}
      <div className="relative">
        {/* Pulse ring */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: "rgba(37,211,102,0.35)" }}
          animate={{ scale: [1, 1.7, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: "rgba(37,211,102,0.2)" }}
          animate={{ scale: [1, 2.1, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
          onClick={handleOpen}
          aria-label="Open WhatsApp chat"
          className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
          style={{
            background: "linear-gradient(135deg,#25D366 0%,#128C7E 100%)",
            boxShadow: "0 6px 28px rgba(37,211,102,0.55)",
          }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} color="white" />
              </motion.span>
            ) : (
              <motion.span
                key="wa"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <WhatsAppIcon size={30} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};

export default WhatsAppChat;
