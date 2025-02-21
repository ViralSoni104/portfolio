import React from "react";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "./ui/Modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";
import { contactHeadline, contactTagline, contactTitle, qrCode } from "@/data";

const Contact = () => {
  return (
    <Modal>
      {/* Modal Trigger Button */}
      <ModalTrigger
        title={contactTitle}
        position="right"
        icon={<FaPhone />}
        otherClasses="trigger-btn bg-redpink text-gray-100 hover:bg-slate-950 hover:text-gray-100"
      />

      <ModalBody>
        <ModalContent>
          {/* Headline */}
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-5 md:mb-7">
            {contactHeadline.start}
            <span className="mx-2 px-1.5 py-0.5 rounded-md bg-contactCol text-black border border-gray-100 dark:border-gray-100">
              {contactHeadline.main}
            </span>
            {contactHeadline.end}
          </h4>

          {/* QR Code Image */}
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: Math.random() * 20 - 10 }}
              whileTap={{ scale: 1.1, rotate: Math.random() * 20 - 10 }}
              className="rounded-md overflow-hidden bg-white"
            >
              <Image
                src={qrCode}
                alt="WhatsApp contact QR code"
                width={220}
                height={220}
                className="rounded-lg object-cover"
              />
            </motion.div>
          </div>

          {/* Contact Tagline */}
          <div className="mt-5 text-center text-gray-100 text-md md:text-lg max-w-sm mx-auto">
            {contactTagline.start}
            <a
              href="https://wa.me/qr/QLQIUQE3ZEWEG1"
              className="text-contactCol font-bold mx-2"
            >
              {contactTagline.main}
            </a>
            {contactTagline.end}
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default Contact;
