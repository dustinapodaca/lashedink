import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import FAQItem from "../../Components/FAQItem";

const faqData = [
  {
    id: 1,
    q: "How long does permanent makeup last?",
    a: "Permanent makeup is a cosmetic tattoo that typically lasts 1-3 years. However, it's essential to keep in mind that the pigment will naturally fade over time. To maintain its best appearance, we recommend getting an Annual Touch-Up. Please be aware that the duration of the makeup can vary for each individual due to differences in skin type and lifestyle.",
  },
  {
    id: 2,
    q: "How often will I need to get a touch up?",
    a: "The frequency of touch-ups depends on several factors, such as skin type, pigment selection, lifestyle habits (sun exposure, smoking, acidic skin care products, etc.), iron deficiency (since your body absorbs iron-oxide as a supplement), and chemical peels. Considering these variables, there is no exact guarantee on how long the makeup will last for each person.\n\nIt's important to understand that final results cannot be guaranteed as everyone's skin type is unique and will interact with the pigments differently, leading to varying rates of breakdown. During your touch-up appointment, we will assess how your skin has received the pigment and make any necessary adjustments accordingly.",
  },
  {
    id: 3,
    q: "Does permanent makeup hurt?",
    a: "The discomfort experienced during permanent makeup application can vary from person to person, as sensitivity levels differ. However, we take measures to ensure your comfort throughout the procedure by applying a pre-numbing topical anesthetic before and during the process. Most clients are pleasantly surprised to find that the sensation is no more painful than tweezing or threading.\n\nTo optimize the experience and results, it is crucial to STRICTLY FOLLOW the Pre-Care Instructions provided. These instructions are designed to minimize bleeding and skin sensitivities during the service. Excessive bleeding and sensitivity can dilute and expel the pigment color, leading to subpar outcomes.\n\n** Please note that having this service performed during your menstrual cycle may increase discomfort during the procedure.\n\n** If you are a frequent smoker or exposed to the sun regularly, the effectiveness of topical anesthetics used during the treatment may be reduced, potentially leading to poorer retention and lasting results.",
  },
  {
    id: 4,
    q: "How long does the appointment take?",
    a: "The initial sessions typically last between 2 to 3 hours, allowing ample time for the detailed procedure. For touch-up appointments, you can expect them to take approximately 1 to 2 hours, as they involve revisiting and enhancing the previous work to maintain the desired results.",
  },
  {
    id: 5,
    q: "What can I expect my brows to look like immediately after the procedure?",
    a: "In the hours following your procedure, your brows will appear significantly darker and bolder than they will be once healed. This effect is due to oxidation in the surface layer of your skin. The color may also seem warmer initially. Some redness or swelling around the treated area may be present, but this typically subsides within 48 hours.\n\nAround day 3, you might notice some flaking or light scabbing on the treated area. It's crucial not to pick at it, as doing so could result in pigment loss in those areas. During this healing phase, your brows may look spotty or patchy until the entire brow has finished healing.\n\nAfter the peeling process, some areas may appear very light or even have seemingly lost pigment entirely. This is normal as the thicker epidermis can mute, hide, or diffuse the pigment underneath. However, over the next 4-6 weeks, the epidermis will normalize, and the softened pigment should become more apparent on the surface of the skin.\n\nYour brows will be fully healed at 4-6 weeks after the procedure. Any pigment that does not return will be addressed during your touch-up appointment. If you desire darker or bolder brows, we can add more color or dimension during that follow-up session!",
  },
  {
    id: 6,
    q: "How many treatments are needed for permanent makeup?",
    a: "Permanent makeup is a multiple-step appointment process, and it's essential to understand that your brows/lips will not be completed after just one service. Typically, at least two appointments are needed initially, and we schedule these appointments 6 weeks apart.\n\nDuring the second visit, which is your perfecting touch-up session, we will assess the color retention and make any necessary adjustments. Keep in mind that everyone heals differently and at different rates. If your cosmetic tattoo does not heal perfectly after the first session, there's no need to worry! We can always make the necessary enhancements and add more density during your next appointment to achieve the desired results. Patience and proper care during the healing process will ensure the best outcome for your permanent makeup.",
  },
  {
    id: 7,
    q: "How will my lips look immediately after lip blush?",
    a: "Right after the lip blush procedure, you can expect your lips to appear slightly larger than normal, resembling the effect of a subtle lip filler injection. The extent of swelling can vary from person to person, with most clients experiencing it within a few hours. Additionally, the lip color will initially appear quite dark and bold, similar to lipstick.\n\nIt's important to note that the size of your lips will gradually shrink back to normal, and the lip color will significantly fade, sometimes up to 50%, within the first 4 days. During this time, you may notice color loss on the inside of your lips first, while the edges retain the pigment for a longer period.\n\nImmediately after the procedure, your lips may feel dry, chapped, tight, and tender to the touch. However, as the days progress, they will gradually feel better, and the color will transform into a soft, flushed hue. Patience and proper aftercare are essential to achieve the desired outcome, as the healing process allows the lip blush to settle and showcase its final, natural-looking results.",
  },
];

const FAQ = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.section
        className="w-full max-w-[1200px] m-auto mb-10 md:mb-16 bg-white select-none"
        style={{ marginTop: "220px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {!isMobile ? (
          <div className="font-sanslight my-10 py-8 text-2xl text-center tracking-tight flex flex-row justify-center max-w-[460px] m-auto border-y border-pink-300 rounded-lg">
            <h2 className="w-full">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
        ) : (
          <h2 className="font-sans pt-4 text-4xl text- text-center mb-12">
            Frequently <br /> Asked <br /> Questions
          </h2>
        )}
        <div className="font-sans text-black space-y-4 px-6 md:px-8 lg:px-28 xl:px-28">
          {faqData.map((faq, index) => (
            <FAQItem
              key={faq.id}
              question={faq.q}
              answer={faq.a}
              open={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default FAQ;
